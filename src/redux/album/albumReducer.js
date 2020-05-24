import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  albums: [],
  isFetching: false,
  errorMessage: undefined,
};

const albumReducer = function albums(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ALBUMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        isFetching: false,
      };
    case actionTypes.FETCH_ALBUMS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
