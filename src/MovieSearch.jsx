import { useState } from "react";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <form className="search" onSubmit={searchMovies}>
        <label htmlFor="query" className="search_query">
          Movie Name
        </label>
        <input
          className="search__bar"
          type="text"
          name="query"
          value={query}
          placeholder="Search here"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search__button">Search</button>
      </form>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            {movie.title} - {movie.release_date}
          </div>
        ))}
      </div>
    </>
  );
}
