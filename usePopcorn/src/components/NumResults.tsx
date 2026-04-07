import type { Movie } from "../types/movie"

type NumResultsProps = {
  movies: Movie[]
}

export const NumResults = ({ movies }: NumResultsProps) => {
  return (
    <p className="num-results">
      Found <strong>{movies ? movies.length : 0}</strong> results
    </p>
  )
}