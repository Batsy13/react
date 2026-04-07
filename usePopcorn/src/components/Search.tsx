export const Search = ({query, setQuery}: {query: string, setQuery: (arg0: string) => void}) => {

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}