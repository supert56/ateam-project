import { SearchInput } from "./index";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";

describe("SearchInput", () => {
  test("should accept text when the user types", () => {
    renderWithProviders(<SearchInput />);
    const input = screen.getByLabelText("search-input");
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input).toHaveValue("hello");
  });
});
