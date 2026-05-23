// #region Imports

// iziToast
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

// Request function
import { getImagesByQuery } from "./js/pixabay-api"

// Remder functions
import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions.js"

// #endregion Imports

const myForm = document.querySelector(".form");
const myFormInput = myForm.querySelector("input");

// Add the event-listener to myForm
const onMyFormSubmit = (event) => {
    event.preventDefault();

    if (myFormInput.value.trim() === "") {
        return iziToast.show({
            message: 'Please, fill out the search field!',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'topRight',
    });
    };

    clearGallery();
    showLoader();

    const searchWord = myFormInput.value.trim();

    getImagesByQuery(searchWord)
        .then((response) => {
            if (response.data.hits.length === 0) {
      throw new Error("EMPTY_RESULT");
            }
            
      return response.data
        })
        .then((data) => {
            createGallery(data.hits);
        })
        .catch((error) => {
            const message = error.message === "EMPTY_RESULT" 
            ? "Sorry, there are no images matching your search query. Please try again!"
            : "Something went wrong";

            iziToast.show({
            message: message,
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'topRight',
            });
      
      return []; 
        }).finally(() => {
            hideLoader();
            myForm.reset();
  });
};

myForm.addEventListener("submit", onMyFormSubmit);
