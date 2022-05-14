import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { getPokemonByName } from "../../api";
import { buildUrl } from "../../utils";
import { URL } from "../../types/enums";
import Layout from "../../components/Layout";

const Pokemon = () => {
  const router = useRouter();
  const pokemonName = router.query?.name ? (router.query.name as string) : "";

  const {
    isSuccess,
    data: pokemon,
    isLoading,
    isError,
  } = useQuery(["getPokemon", pokemonName], () =>
    getPokemonByName(pokemonName)
  );
  const pokemonIndex = ("000" + pokemon.id).slice(-3);

  const renderImage = () => (
    <Image
      src={buildUrl(URL.BASE_ASSET_URL, `${pokemonIndex}.png`)}
      alt={pokemon.name}
      width={200}
      height={200}
    />
  );

  const renderTypes = () =>
    pokemon.types.map((type: Record<string, any>) => (
      <li key={type.type.name}>
        <div className="bg-blue-100 text-blue-800 text-lg font-semibold my-2 mr-2 px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">
          {type.type.name}
        </div>
      </li>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat: Record<string, any>) => {
      const width = Math.floor((stat.base_stat / 255) * 100);

      return (
        <li key={stat.stat.name} className="flex flex-col w-full md:w-1/2">
          <div className="w-full text-gray-600 text-s text-left truncate mx-auto">
            <span>{stat.stat.name}: </span>
            <span>{stat.base_stat}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-3 mx-auto">
            <div
              className="bg-gray-600 dark:bg-gray-300 font-medium px-5 py-2 leading-none rounded-full animate-progress"
              style={{ width: width + "%" }}
            ></div>
          </div>
        </li>
      );
    });

  if (isLoading) {
    return (
      <Layout title={""}>
        <div className="flex justify-center items-center w-full h-full">
          Loading...
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout title={""}>
        <div className="flex justify-center items-center w-full h-full">
          Something went wrong
        </div>
      </Layout>
    );
  }

  if (isSuccess) {
    return (
      <Layout title={pokemonName}>
        <div className="flex justify-center">{renderImage()}</div>
        <ul className="flex flex-row flex-wrap items-center justify-center w-1/2 mx-auto">
          {renderTypes()}
        </ul>
        <ul className="flex flex-col items-center w-full py-8">
          {renderStats()}
        </ul>
      </Layout>
    );
  }

  return <></>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPokemon", name], () =>
    getPokemonByName(name)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Pokemon;
