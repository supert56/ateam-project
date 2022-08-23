import Search from "./index";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

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

describe("Search", () => {
  test("should display the correct heading", () => {
    renderWithProviders(<Search />);
    expect(screen.getByText("Results for:")).toBeInTheDocument();
  });
});
