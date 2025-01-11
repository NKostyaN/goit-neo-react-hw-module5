import { getMovie } from "../api/tmdb-api";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useEffect, useState, useRef, Suspense } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [result, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const location = useLocation();
  const backPath = useRef(location.state);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await getMovie(movieId);
        setResults(res);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchMovie();
  }, [movieId]);

  return (
    <div className="container">
      <Link to={backPath.current ?? "/movies"}>
        <button>&lArr; Back</button>
      </Link>
      {result && <MovieDetails item={result} />}
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessage />}
      {result && (
        <div>
          <p>Additional info:</p>
          <ul>
            <li>
              <Link to="cast">
                • <u>Cast</u>
              </Link>
            </li>
            <li>
              <Link to="reviews">
                • <u>Reviews</u>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <hr />
      <Suspense fallback={<h1>LOADING Outlet...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
