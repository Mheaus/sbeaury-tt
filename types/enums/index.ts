export enum ApiUrl {
  BaseApiURL = "https://pokeapi.co/api/v2/pokemon",
  BaseAssetURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail",
}

// this is good idea, but it may difficult to maintain
// another thing is that routes are still following common REST conventions, so people may say that your route should be `/pokemons/:id` ( with an `s` ), but this is not really important
export enum RouteName {
  Home = "/",
  Pokemon = "/pokemon/[slug]", // here it's already different from your filesystem `/pokemon/[name]`
}

export enum PageTitle {
  Home = "PokēNext",
}

export enum PokemonAttribute {
  MaxStats = 255,
}
