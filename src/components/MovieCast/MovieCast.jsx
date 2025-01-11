import { getCast } from "../../api/tmdb-api";
import CastList from "../CastList/CastList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();

  const [result, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await getCast(movieId);
        setResults(res);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchCast();
  }, [movieId]);

  return (
    <div>
      {result.length != 0 && <CastList hits={result} />}
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessage />}
      {result.length === 0 && !isLoading && !isError && (
        <p>We don't have any cast data yet</p>
      )}
    </div>
  );
};

export default MovieCast;
