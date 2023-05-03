import movies from "../mock-data/movies.json";
import IMovieDetails from "../types/IMovieDetails";

export default {
  getMovieDetails(movieId: number): IMovieDetails {
    const movie = movies.find((m) => m.id === movieId);

    if (movie) {
      const movieDetails: IMovieDetails = {
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        genres: movie.genres,
        imageUrl: movie.poster_path as string,
        rating: movie.vote_average,
        duration: movie.runtime as number,
        description: movie.overview,
      };

      return movieDetails;
    }

    throw new Error(`Movie with id ${movieId} not found`);
  },
};
