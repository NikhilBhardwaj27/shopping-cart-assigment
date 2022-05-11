import { combineReducers } from "redux";
import { bannerReducer } from "./banners/banner.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

export const rootreducer = combineReducers({
  banner: bannerReducer,
  categories:categoriesReducer
});
