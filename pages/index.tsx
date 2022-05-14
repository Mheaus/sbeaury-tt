import { useState } from "react";
import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getPokemons } from "../api";
import { buildUrl } from "../utils";
import { URL, PAGE_TITLE } from "../types/enums";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>(URL.BASE_API_URL);
  const [offset, setOffet] = useState(0);

  const {
    data: pokemons,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["getPokemons", url], () => getPokemons(buildUrl(url)));

  const handleClick = (url: string, next: boolean) => {
    setUrl(url);
    setOffet(next ? offset + 20 : offset - 20);
  };

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
      <Layout title={PAGE_TITLE.HOME}>
        <main className="grid gap-4 grid-cols-4 pb-10">
          {pokemons.results.map(
            (pokemon: Record<string, any>, index: number) => (
              <PokemonCard
                key={pokemon.name}
                index={index + offset}
                pokemon={pokemon}
              />
            )
          )}
        </main>
        <div className="flex justify-center w-full pb-10">
          <button
            disabled={!pokemons.previous}
            className="h-10 min-w-[105px] mr-2 text-white transition-colors duration-150 bg-gray-600 rounded-full focus:shadow-outline hover:bg-gray-700 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => handleClick(pokemons.previous, false)}
          >
            Previous
          </button>
          <button
            disabled={!pokemons.next}
            className="h-10 min-w-[105px] text-white transition-colors duration-150 bg-gray-600 rounded-full focus:shadow-outline hover:bg-gray-700 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => handleClick(pokemons.next, true)}
          >
            Next
          </button>
        </div>
      </Layout>
    );
  }

  return <></>;
};

export default Home;
