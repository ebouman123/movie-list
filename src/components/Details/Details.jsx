import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function Details() {
  const history = useHistory();
  const movie = useSelector((store) => store.movies);
  // Targets the first row to get the basic movie details
  const specificMovie = movie[0];

  return (
    <>
      <h1>Details</h1>
      <div data-testid="movieDetails">
        <h3>{specificMovie.title}</h3>
        <ul>
          Genres
          {/* Map over each movie row to pull the genre(s) */}
          {movie.map((movie, i) => {
            return (
                <li key={i}>{movie.name}</li>
            );
          })}
        </ul>
        <img src={specificMovie.poster} alt={specificMovie.title} />
        <p>{specificMovie.description}</p>
      </div>
      <button data-testid="toList" onClick={() => history.push("/")}>
        Back to Movie List
      </button>
    </>
  );
}
