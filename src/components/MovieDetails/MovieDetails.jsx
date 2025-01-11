import { Link } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = ({ item }) => {
  const POSTER_PATH = "https://image.tmdb.org/t/p/w342";

  const ganres = item.genres.map((el) => " • " + el.name);

  return (
    <>
      <h1>{`${item.title} (${item.release_date.slice(0, 4)})`}</h1>
      <Link to={`/movies/${item.id}`} state={location} className="movie-detail">
        {item.poster_path ? (
          <img
            className="movie-poster"
            src={`${POSTER_PATH + item.poster_path}`}
            alt="Movie poster"
          />
        ) : (
          <div className="details-placeholder"></div>
        )}
        <div className="movie-detail-info">
          <h4>{`${item.tagline}`}</h4>
          <hr />
          <p>
            <b>User score:</b> {`${item.vote_average}`}
          </p>
          <hr />
          <b>Overview</b>
          <p>{`${item.overview}`}</p>
          <hr />
          <b>Ganres:</b>
          <p>{ganres}</p>
          <hr />
        </div>
      </Link>
    </>
  );
};

export default MovieDetails;
