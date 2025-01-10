import axios from "axios";

const ACCESS_KEY = "hDWeJHwegmsoEHKqE10thsZd_4IqZYqU_0WgugdriXk";
const SEARCH_URL = "/search/photos";

axios.defaults.baseURL = "https://api.unsplash.com";

async function getPhotos(query, page, perPage) {
  const res = await axios.get(
    `${SEARCH_URL}?query=${query}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`
  );
  return [res.data.results, res.data.total];
}

export default getPhotos;
