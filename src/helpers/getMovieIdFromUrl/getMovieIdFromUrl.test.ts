import { getMovieIdFromUrl } from "./index";

describe("getMovieIdFromUrl", () => {
  test("should return the movie id from the prettified URL", () => {
    const input = "top-gun-123";
    expect(getMovieIdFromUrl(input)).toEqual("123");
  });
});
