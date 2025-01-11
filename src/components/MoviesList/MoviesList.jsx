import MovieItem from "../MovieItem/MovieItem";
import { nanoid } from "nanoid";
import "./MoviesList.css";

const MoviesList = ({ hits }) => {
  return (
    <ul className="movie-list">
      {hits.map((el) => (
        <li key={nanoid()}>
          <MovieItem item={el} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
