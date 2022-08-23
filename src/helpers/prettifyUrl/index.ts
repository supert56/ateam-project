import { Movie } from "../../types/movie";

export const prettifyUrl = (title: string, id: Movie["id"]) => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .split(" ")
    .join("-")
    .concat(`-${id}`);
};
