import { MovieResults } from "./index";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

const mockMovies = [
  { id: 244786, title: "Whiplash" },
  { id: 238, title: "The Godfather" },
];

describe("MovieResults", () => {
  test("should display the movies", () => {
    renderWithProviders(<MovieResults movies={mockMovies} />);
    expect(screen.getByText("Whiplash")).toBeInTheDocument();
    expect(screen.getByText("The Godfather")).toBeInTheDocument();
  });
});
