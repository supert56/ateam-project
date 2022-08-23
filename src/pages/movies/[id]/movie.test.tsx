import Movie from "./index";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test-utils";
import { defaultMockMovie } from "../../../types/movie";
import { LOADING_STATES } from "../../../constants/loadingStates";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("Movie", () => {
  test("should display the films title", () => {
    renderWithProviders(<Movie />, {
      preloadedState: {
        movie: { entity: defaultMockMovie, loading: LOADING_STATES.SUCCEEDED },
      },
    });

    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
  });
});
