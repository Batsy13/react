import type { MovieListProps } from "../types/movie"
import { Movie } from "./Movie"

export const MovieList = ({ movies, onSelectMovie }: MovieListProps) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>
      ))}
    </ul>
  )
}