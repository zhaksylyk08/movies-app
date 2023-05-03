import movies from "../mock-data/movies.json";
import IMovieDetails from "../types/IMovieDetails";
import IMovie from "../types/IMovie";
import { SortOptions } from "../types/SortOptions";

export default {
  getMovieDetails(movieId: number): IMovieDetails {
    const movie = movies.find((m) => m.id === movieId);

    if (movie) {
      return this.mapMovieDetails(movie);
    }

    throw new Error(`Movie with id ${movieId} not found`);
  },

  getMovies(sortOption: SortOptions): Array<IMovie> {
    // TODO: Integrate with backend
    return movies.map((m) => this.mapMovie(m));
  },

  mapMovieDetails(movie: any): IMovieDetails {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      genres: movie.genres,
      imageUrl: movie.poster_path as string,
      rating: movie.vote_average,
      duration: movie.runtime as number,
      description: movie.overview,
    };
  },

  mapMovie(movie: any): IMovie {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      genres: movie.genres,
      imageUrl: movie.poster_path as string,
    };
  },
};
