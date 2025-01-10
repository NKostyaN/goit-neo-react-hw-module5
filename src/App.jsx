// import getPhotos from "./api/pixabay-api"; // <--- api for testing
import getPhotos from "./api/unsplash-api";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [imageToShow, setImageToShow] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (state) => {
    setModalIsOpen(state);
  };

  const search = async (query) => {
    setQuery(query);
    setPage(0);
    setResults([]);
  };

  const getNextPage = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const [res, total] = await getPhotos(query, page, 10);
        if (page === 0) {
          setResults(res);
          setTotalResults(total);
        } else {
          setResults((prevRes) => [...prevRes, ...res]);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchArticles();
  }, [query, page]);

  const handleModalShow = (data, state) => {
    setImageToShow(data);
    openModal(state);
  };

  return (
    <>
      <SearchBar search={search} />
      <br />
      {results.length > 0 ? (
        <ImageGallery hits={results} showModal={handleModalShow} />
      ) : (
        !isLoading &&
        query &&
        !isError && <p className="loader">No results..</p>
      )}
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessage />}

      {results.length > 0 &&
        results.length < totalResults &&
        !isLoading &&
        !isError && <LoadMoreBtn click={getNextPage} />}

      {!isError && (
        <ImageModal
          showModal={modalIsOpen}
          props={imageToShow}
          handleModal={handleModalShow}
        />
      )}
    </>
  );
};

export default App;
