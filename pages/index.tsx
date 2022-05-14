import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getPokemons } from "../api";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";

const Home: NextPage = () => {
  const {
    isSuccess,
    data: pokemons,
    isLoading,
    isError,
  } = useQuery("pokemon", getPokemons);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isSuccess) {
    return (
      <Layout title="Next.js Pokedex">
        <main className="grid gap-4 grid-cols-4 pb-10">
          {pokemons.map((pokemon: any, index: number) => (
            <PokemonCard key={pokemon.name} index={index} pokemon={pokemon} />
          ))}
        </main>
        <div className="flex justify-center w-full pb-10">
          <button className="h-10 min-w-[105px] mr-2 text-white transition-colors duration-150 bg-gray-600 rounded-full focus:shadow-outline hover:bg-gray-700">
            Previous
          </button>
          <button className="h-10 min-w-[105px] text-white transition-colors duration-150 bg-gray-600 rounded-full focus:shadow-outline hover:bg-gray-700">
            Next
          </button>
        </div>
      </Layout>
    );
  }

  return <></>;
};

export default Home;
