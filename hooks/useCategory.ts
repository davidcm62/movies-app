import { useEffect, useState } from "react";
import api from "../services/api";
import { Movie } from "../types";

export const useCategory = (id: string) => {
  const [categoryMovies, setCategoryMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await api.getCategoryById(id);
        setCategoryMovies(data);
      })();
    }
  }, [id]);

  return {
    categoryMovies,
  };
};
