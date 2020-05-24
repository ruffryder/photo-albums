import * as actionTypes from "../actionTypes";

export const addToFavourites = (photoId, photo) => ({
  type: actionTypes.ADD_TO_FAVOURITES,
  id: photoId,
  photoItem: photo,
});

export const removeFromFavourites = (id) => ({
  type: actionTypes.REMOVE_FROM_FAVOURITES,
  id: id,
});
