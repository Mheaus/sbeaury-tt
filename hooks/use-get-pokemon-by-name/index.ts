import { useQuery } from "react-query";
import { getPokemonByName } from "../../api";
import { buildApiUrl } from "../../utils";

// I find the `index` export pattern is something really strange.
// If you only need one file for your hook, maybe just create an `useGetPokemonByName.ts`, I don't see why you need to create a file for this except following conventions.
// This feeling is reinforced because this hook is not very usefull very complex.
// I think you could have put this lines of codes directly in the pages itselves, in component dedicated or just isolate the query function `getPokemonByName(buildApiUrl(pokemonName))` in a service /api/utils/datasource dictionary/class and use it with useQuery in your component.
// This way, you don't do props mapping like you're doing with `data: pokemon` or restain returned values and there's less maintenance to do.
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
