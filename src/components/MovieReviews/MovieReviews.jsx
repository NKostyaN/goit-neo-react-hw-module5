import ReviewList from "../ReviewList/ReviewList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getReviews } from "../../api/tmdb-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [result, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await getReviews(movieId);
        setResults(res);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    result.length === 0 && fetchReviews();
  }, []);

  return (
    <div>
      {result.length != 0 && <ReviewList hits={result} />}
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessage />}
      {result.length === 0 && !isLoading && !isError && (
        <p>We don't have any reviews yet</p>
      )}
    </div>
  );
};

export default MovieReviews;
