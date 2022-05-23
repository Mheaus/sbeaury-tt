// default import of react in typescript is not really what you want to do
// https://stackoverflow.com/questions/55285737/import-as-react-from-react-vs-import-react-from-react
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildApiUrl } from "../../utils";
import { ApiUrl, RouteName } from "../../types/enums";

interface ICardProps {
  pokemon: Record<string, any>;
  index: number;
}

const PokemonCard = ({ pokemon, index }: ICardProps) => {
  const pokemonIndex = ("000" + (index + 1)).slice(-3);

  return (
    <div className="md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <Image
          alt={pokemon.name}
          width={150}
          height={150}
          src={buildApiUrl(ApiUrl.BaseAssetURL, `${pokemonIndex}.png`)}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white capitalize">
          {pokemon.name}
        </h5>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <Link
            href={{
              pathname: RouteName.Pokemon,
              query: { slug: pokemon.name },
            }}
            scroll={false}
          >
            <a
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:transparent dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              View
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
