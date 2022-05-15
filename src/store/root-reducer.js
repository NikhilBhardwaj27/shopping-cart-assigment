import { combineReducers } from "redux";
import { bannerReducer } from "./banners/banner.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { productsReducer } from "./products/products.reducer";

export const rootreducer = combineReducers({
  banner: bannerReducer,
  categories:categoriesReducer,
  products:productsReducer,
  cart:cartReducer
});
