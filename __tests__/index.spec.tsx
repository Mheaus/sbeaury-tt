import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { useGetPokemons } from "../hooks";
import Home from "../pages/index";
import mockPokemons from "./mocks/pokemons.json";

const mockResponse = {
  pokemons: {
    results: mockPokemons.results,
  },
  isSuccess: true,
};
const mockRouter = { pathName: "/" };

jest.mock("next/router", () => ({
  ...(jest.requireActual("next/router") as any),
  useRouter: jest.fn().mockImplementation(() => mockRouter),
}));

jest.mock("../hooks/use-get-pokemons", () => ({
  ...(jest.requireActual("next/router") as any),
  useGetPokemons: jest.fn().mockImplementation(() => mockResponse),
}));

// this is very appreciated, you should keep doing this in your future technical tests
describe("Home", () => {
  it("should properly render home page and its components", () => {
    // here you can also do :
    // const { container, getByTestId } = render(<Home />);
    // and use `container` or `getByTestId` instead of `screen` in your expects below
    render(<Home />);

    // check if all components are rendered
    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("page-title")).toBeInTheDocument();
    expect(screen.getByTestId("page-title").textContent).toEqual("PokēNext");
    expect(screen.getByTestId("pokemon-cards")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-cards").children.length).toEqual(20);
    expect(screen.getByTestId("btn-previous")).toBeInTheDocument();
    expect(screen.getByTestId("btn-next")).toBeInTheDocument();
  });
});
