import axios from "axios";
import { buildApiUrl } from "../utils";
import { ApiUrl } from "../types/enums";

export const getPokemons = async (url: string) => {
  const { data } = await axios.get(buildApiUrl(url));

  return data;
};

export const getPokemonByName = async (name: string) => {
  const {
    data: { id, name: pokemonName, types, stats },
  } = await axios.get(buildApiUrl(ApiUrl.BaseApiURL, name));

  return { id, pokemonName, types, stats };
};
