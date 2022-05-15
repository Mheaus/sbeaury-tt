import { useQuery } from "react-query";
import { getPokemonByName } from "../../api";
import { buildApiUrl } from "../../utils";

export const useGetPokemonByName = (pokemonName: string) => {
  const {
    data: pokemon,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["getPokemon", pokemonName], () =>
    getPokemonByName(buildApiUrl(pokemonName))
  );

  return { pokemon, isLoading, isError, isSuccess };
};
