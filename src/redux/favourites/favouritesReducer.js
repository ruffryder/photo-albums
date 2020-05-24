import * as actionTypes from "../actionTypes";
import { omit } from "lodash";

const INITIAL_STATE = {
  favourites: {},
};

const favouritesReducer = function favourites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: { ...state.favourites, [action.id]: action.photoItem },
      };
    case actionTypes.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: omit(state.favourites, action.id),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
