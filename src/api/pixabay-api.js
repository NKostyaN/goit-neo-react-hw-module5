import axios from "axios";

const API_KEY = "46590311-6ed07305336452fed03a33c90";

axios.defaults.baseURL = "https://pixabay.com/api/";

async function getPhotos(query, page, perPage) {
  const res = await axios.get(`?key=${API_KEY}`, {
    params: {
      q: query,
      page: page + 1,
      per_page: perPage,
    },
  });
  return [res.data.hits, res.data.total];
}

export default getPhotos;
