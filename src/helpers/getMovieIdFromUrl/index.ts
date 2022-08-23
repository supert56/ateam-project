export const getMovieIdFromUrl = (url: string) => {
  return url.split("-").at(-1);
};
