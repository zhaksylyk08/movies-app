export default interface IMovieDetails {
  id: number;
  title: string;
  releaseDate: string;
  genres: Array<string>;
  imageUrl: string;
  rating: number;
  duration: number;
  description: string;
}
