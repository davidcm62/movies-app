import { useEffect, useState } from "react";
import api from "../services/api";
import { Movie } from "../types";

export const useMovie = (id: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await api.getMovieById(id);
        setMovie(data);
      })();
    }
  }, [id]);

  return {
    movie,
  };
};
