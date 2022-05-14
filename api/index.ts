import axios from "axios";
import { buildUrl } from "../utils";

export const getPokemons = async () => {
  const {
    data: { results },
  } = await axios.get("https://pokeapi.co/api/v2/pokemon");

  return results;
};

export const getPokemonByName = async (name: string) => {
  const { data } = await axios.get(buildUrl(name));

  return data;
};
