import { combineReducers } from "redux";
import albumReducer from "./album/albumReducer";
import photoReducer from "./photo/photoReducer";
import favouritesReducer from "./favourites/favouritesReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["photos", "favourites"],
};

const rootReducer = combineReducers({
  albums: albumReducer,
  photos: photoReducer,
  favourites: favouritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
