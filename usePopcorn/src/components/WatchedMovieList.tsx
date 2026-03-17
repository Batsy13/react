import type { WatchedMovieListProps } from "../types/movie"
import { WatchedMovie } from "./WatchedMovie"

export const WatchedMovieList = ({ watched }: WatchedMovieListProps) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}