import getTrending from "../api/tmdb-api";
import { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchTranding = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const res = await getTrending();
        setResults(res);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTranding();
  }, []);

  return (
    <div className="container">
      <h1>Tranding today</h1>
      {results && <MoviesList hits={results} />}
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
