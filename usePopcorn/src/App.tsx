import { useState } from "react";
import { Box } from "./components/Box";
import { MovieList } from "./components/MovieList";
import { NavBar } from "./components/NavBar";
import { NumResults } from "./components/NumResults";
import { Search } from "./components/Search";
import { WatchedMovieList } from "./components/WatchedMovieList";
import { WatchedSummary } from "./components/WatchedSummary";
import { tempWatchedData, tempMovieData } from "./mocks/movies";

export default function App() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <main className="main">
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </main>
    </>
  );
}