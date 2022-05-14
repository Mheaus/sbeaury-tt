import axios from "axios";
import { buildUrl } from "../utils";
import { URL } from "../types/enums";

export const getPokemons = async () => {
  const {
    data: { results },
  } = await axios.get(buildUrl(URL.BASE_API_URL));

  return results;
};

export const getPokemonByName = async (name: string) => {
  const { data } = await axios.get(buildUrl(URL.BASE_API_URL, name));

  return data;
};
