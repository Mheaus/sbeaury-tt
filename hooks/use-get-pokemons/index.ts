import { useQuery } from "react-query";
import { getPokemons } from "../../api";
import { buildApiUrl } from "../../utils";

export const useGetPokemons = (url: string) => {
  const {
    data: pokemons,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["getPokemons", url], () => getPokemons(buildApiUrl(url)));

  return { pokemons, isLoading, isError, isSuccess };
};
