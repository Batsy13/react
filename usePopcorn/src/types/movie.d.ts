import type { ReactNode } from "react"

export type WatchedSummaryProps = {
  watched: WatchedMovie[]
}

export type BoxProps = {
  children: ReactNode
}

export type MovieListProps = {
  movies: Movie[],
  onSelectMovie: (arg0: string) => void;
}

export type MovieProps = {
  movie: Movie
  onSelectMovie: (arg0: string) => void;
}

export type Movie = {
  imdbID: string,
  Title: string,
  Year: string,
  Poster: string,
}

export type WatchedMovie = {
  imdbID: string,
  Title: string,
  Year: string,
  Poster: string,
  runtime: number,
  imdbRating: number,
  userRating: number,
}

export type WatchedMovieListProps = {
  watched: WatchedMovie[]
}

export type WatchedMovieProps = {
  movie: WatchedMovie
}