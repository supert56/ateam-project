import axios from "axios";
import Movies from "./index";
import { act, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { Movie } from "../types/movie";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Movies", () => {
  beforeEach(async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: [
          { id: 123, title: "The Shawshank Redemption" },
          { id: 234, title: "Life of Pi" },
        ] as Movie[],
      },
    });

    await act(async () => {
      renderWithProviders(<Movies />);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should display the correct heading", async () => {
    expect(screen.getByText("Top Rated Movies")).toBeInTheDocument();
  });

  test("should display a list of top movies", async () => {
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
    expect(screen.getByText("Life of Pi")).toBeInTheDocument();
  });
});
