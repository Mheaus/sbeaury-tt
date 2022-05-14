import axios from "axios";
import { buildUrl } from "../utils";
import { URL } from "../types/enums";

export const getPokemons = async (url: string) => {
  const { data } = await axios.get(buildUrl(url));

  return data;
};

export const getPokemonByName = async (name: string) => {
  const {
    data: { id, name: pokemonName, types, stats },
  } = await axios.get(buildUrl(URL.BaseApiURL, name));

  return { id, pokemonName, types, stats };
};
