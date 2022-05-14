import type { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { getPokemonByName } from "../../api";
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

  const renderTypes = () =>
    pokemon.types.map((type: any) => (
      <li key={type.type.name}>{type.type.name}</li>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat: any, index: any) => (
      <div key={stat.stat.name}>
        {stat.stat.name}: {stat.base_stat}
      </div>
    ));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isSuccess) {
    return (
      <Layout title={pokemonName}>
        <ul>{renderTypes()}</ul>
        <div>{renderStats()}</div>
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
