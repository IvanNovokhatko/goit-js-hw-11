// #region Imports

// Request function
import { getImagesByQuery } from "./js/pixabay-api"

// Remder functions
import {createGallery, clearGallery, showLoader, hideLoader, showEmptyWarning, showValidationError, showGenericError} from "./js/render-functions.js"

// #endregion Imports

const myForm = document.querySelector(".form");
const myFormInput = myForm.querySelector("input");

// Add the event-listener to myForm
const onMyFormSubmit = (event) => {
    event.preventDefault();

    if (myFormInput.value.trim() === "") {
        return showValidationError();
    };

    clearGallery();
    showLoader();

    const searchWord = myFormInput.value.trim();

    getImagesByQuery(searchWord)
        .then((data) => {
            if (data.hits.length === 0) {
      throw new Error("EMPTY_RESULT");
            }

            createGallery(data.hits);
        })
        .catch((error) => {
            const message = error.message === "EMPTY_RESULT" 
            ? showEmptyWarning()
            : showGenericError();

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
