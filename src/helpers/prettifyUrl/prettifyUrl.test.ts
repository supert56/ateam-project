import { prettifyUrl } from "./index";

describe("PrettifyUrl", () => {
  test("should transform url to lowercase", () => {
    const input = "Lord Of The Rings";
    expect(prettifyUrl(input, 1)).toEqual("lord-of-the-rings-1");
  });

  test("should remove special characters", () => {
    const input = "Lord Of& The Rings:";
    expect(prettifyUrl(input, 1)).toEqual("lord-of-the-rings-1");
  });

  test("should concatenate film name with hyphens", () => {
    const input = "game of thrones";
    expect(prettifyUrl(input, 4)).toEqual("game-of-thrones-4");
  });

  test("should append an id", () => {
    const input = "game of thrones4";
    expect(prettifyUrl(input, 1405)).toEqual("game-of-thrones4-1405");
  });
});
