// #region Imports

// iziToast
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

// axios
import axios from "axios";
// #endregion Imports


const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    return axios
  .get(BASE_URL, {
    params: {
        key: "55989739-dc7d8052769ba2cd59e59f330",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    },
  })
        .then((response) => {
            return response.data; 
        })
        .catch((error) => {
            throw error; 
        });
};