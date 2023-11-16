import "./styles/movie.css";

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <img
        className="movie__image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
      />
      <div className="movie__content">
        <h1 className="movie__title">{movie.title}</h1>
        <p className="movie__date">Release Date: {movie.release_date}</p>
        <p className="movie__votes">Rating: {movie.vote_average}</p>
        <p className="movie__description">{movie.overview}</p>
      </div>
    </div>
  );
}
