import * as actionTypes from "../actionTypes";
import axios from "axios";

export const fetchPhotosStart = () => ({
  type: actionTypes.FETCH_PHOTOS_START,
});

export const fetchPhotosSuccess = (photos) => ({
  type: actionTypes.FETCH_PHOTOS_SUCCESS,
  payload: photos,
});

export const fetchPhotosFail = (errorMessage) => ({
  type: actionTypes.FETCH_PHOTOS_FAIL,
  payload: errorMessage,
});

export const fetchPhotosStartAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchPhotosStart());
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => {
        dispatch(fetchPhotosSuccess(res.data));
      })
      .catch((error) => dispatch(fetchPhotosFail(error.message)));
  };
};
