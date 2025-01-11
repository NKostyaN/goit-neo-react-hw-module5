import { Link, useLocation } from "react-router-dom";
import "./MovieItem.css";

const MovieItem = ({ item }) => {
  const location = useLocation();
  const POSTER_PATH = "https://image.tmdb.org/t/p/w92";

  return (
    <Link to={`/movies/${item.id}`} state={location} className="movie-item">
      {item.poster_path ? (
        <img
          className="movie-poster"
          src={`${POSTER_PATH + item.poster_path}`}
          alt="Movie poster"
        />
      ) : (
        <div className="item-placeholder"></div>
      )}
      <div className="movie-info">
        <p>
          <b>{item.title}</b>
          <hr />
        </p>
        <p className="movie-original">Original title: {item.original_title}</p>
        <p>
          <b>{item.release_date.slice(0, 4)}</b>
        </p>
      </div>
    </Link>
  );
};

export default MovieItem;
