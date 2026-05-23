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
};


// For the backend, use the public  Pixabay API service . Register, get your unique access key, and read the documentation .



// List of query string parameters that you must specify:

// key — your unique API access key.
// q — the search word. What the user will type.
// image_type — image type. Only photos are needed, so set the value to  photo.
// orientation — photo orientation. Set the value to  horizontal.
// safesearch — filter by age. Set the value to  true.


// The response will contain an object with several properties, one of which ( hits) will contain an array of objects with images that met the criteria of the query parameters.



// Use modularity and syntax to organize your codeexport/import.

// pixabay-api.js Store functions for executing HTTP requests in a file :

// getImagesByQuery(query) - This function should take one parameter query(a search term, which is a string), make an HTTP request, and return the property value datafrom the received response.
