import { useState } from "react";
import type { NextPage } from "next";
import { useGetPokemons } from "../hooks";
import { ApiUrl, PageTitle } from "../types/enums";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>(ApiUrl.BaseApiURL);
  const [offset, setOffet] = useState(0);

  const { pokemons, isLoading, isError, isSuccess } = useGetPokemons(url);

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
      <Layout title={PageTitle.Home}>
        <main
          className="grid  grid-cols-1 gap-y-4 md:grid-cols-4 md:gap-4 pb-10"
          data-testid="pokemon-cards"
        >
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
            className="h-10 min-w-[105px] mr-2 text-white transition-colors duration-150 bg-gray-600 rounded-full focus:shadow-outline hover:bg-gray-700 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
            data-testid="btn-previous"
            disabled={!pokemons.previous}
            onClick={() => handleClick(pokemons.previous, false)}
          >
            Previous
          </button>
          <button
            className="h-10 min-w-[105px] text-white transition-colors duration-150 bg-gray-600 rounded-full focus:shadow-outline hover:bg-gray-700 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
            data-testid="btn-next"
            disabled={!pokemons.next}
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
