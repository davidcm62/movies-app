import { Movie } from "../types";
import data from "./data";

export default {
  getMovieById: async (id: string): Promise<Movie> => {
    return data.find((movie) => movie.id === id) as Movie;
  },
  getCategoryById: async (id: string): Promise<Movie[]> => {
    return data.sort(() => 0.5 - Math.random()).slice(0, 20);
  },
};
