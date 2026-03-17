import type { MovieListProps } from "../types/movie"
import { Movie } from "./Movie"

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}