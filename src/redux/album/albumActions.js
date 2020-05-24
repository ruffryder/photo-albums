import * as actionTypes from "../actionTypes";
import axios from "axios";

export const fetchAlbumsStart = () => ({
  type: actionTypes.FETCH_ALBUMS_START,
});

export const fetchAlbumsSuccess = (albums) => ({
  type: actionTypes.FETCH_ALBUMS_SUCCESS,
  payload: albums,
});

export const fetchAlbumsFail = (errorMessage) => ({
  type: actionTypes.FETCH_ALBUMS_FAIL,
  payload: errorMessage,
});

export const fetchAlbumsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsStart());
    axios
      .get("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5")
      .then((res) => {
        dispatch(fetchAlbumsSuccess(res.data));
      })
      .catch((error) => dispatch(fetchAlbumsFail(error.message)));
  };
};
