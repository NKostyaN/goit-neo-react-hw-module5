import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzY2MDJjM2YzMjAxNWM3NzE1ZTc4ZTcyMDkzNTIxNCIsIm5iZiI6MTczNjQ5NjQyOC43NzEwMDAxLCJzdWIiOiI2NzgwZDUyY2FiYWJiYmEwNDBiYWYxYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8C-8nvo4OjgIdyuw8BvIoF4kcdZ9M56L7CzFnmMKPis";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

async function getTrending() {
  const res = await axios.get("/trending/movie/day", options);
  return res.data.results;
}

async function searchMovie(query, page) {
  const res = await axios.get(
    `/search/movie?query=${query}&page=${page}`,
    options
  );
  return [res.data.results, res.data.total_pages];
}

async function getMovie(movieId) {
  const res = await axios.get(`/movie/${movieId}`, options);
  return res.data;
}

async function getCast(movieId) {
  const res = await axios.get(`/movie/${movieId}/credits`, options);
  return res.data.cast;
}

async function getReviews(movieId) {
  const res = await axios.get(`/movie/${movieId}/reviews`, options);
  return res.data.results;
}

export default getTrending;
export { searchMovie };
export { getMovie };
export { getCast };
export { getReviews };
