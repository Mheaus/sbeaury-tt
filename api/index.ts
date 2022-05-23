import axios from "axios";
import { buildApiUrl } from "../utils";
import { ApiUrl } from "../types/enums";

export const getPokemons = async (url: string) => {
  const { data } = await axios.get(buildApiUrl(url));

  return data;
};

// you really should dive in GraphQL, using a single endpoint and custom variables would have save you to creating all these urls builder functions
export const getPokemonByName = async (name: string) => {
  const {
    data: { id, name: pokemonName, types, stats },
  } = await axios.get(buildApiUrl(ApiUrl.BaseApiURL, name));

  return { id, pokemonName, types, stats };
};
