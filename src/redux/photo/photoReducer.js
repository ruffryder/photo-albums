import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  photos: [],
  isFetching: false,
  errorMessage: undefined,
};

const photoReducer = function photos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        isFetching: false,
      };
    case actionTypes.FETCH_PHOTOS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
