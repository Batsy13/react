import { useEffect, useState } from "react";
import { Box } from "./components/Box";
import { MovieList } from "./components/MovieList";
import { NavBar } from "./components/NavBar";
import { NumResults } from "./components/NumResults";
import { Search } from "./components/Search";
import { WatchedMovieList } from "./components/WatchedMovieList";
import { WatchedSummary } from "./components/WatchedSummary";
import { tempWatchedData, tempMovieData } from "./mocks/movies";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { MovieDetails } from "./components/MovieDetails";

export default function App() {
  const [query, setQuery] = useState("spider-man");
  const [watched, setWatched] = useState(tempWatchedData);
  const [movies, setMovies] = useState(tempMovieData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const KEY = import.meta.env.VITE_OMDB_KEY

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError("")
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)

        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json()
        if (data.Reponse === "False") throw new Error("Movie not found")

        setMovies(data.Search)
      } catch (err: any) {
        console.error(err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setError("")
      return
    }

    fetchMovies();
  }, [query])

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
        </Box>
        <Box>
          {
            selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} /> :
              <>
                <WatchedSummary watched={watched} />
                <WatchedMovieList watched={watched} />
              </>
          }
        </Box>
      </main>
    </>
  );
}