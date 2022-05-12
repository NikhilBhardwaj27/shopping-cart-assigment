import { createAction } from "../../utils/reducer.utils";
import PRODUCTS_ACTION_TYPES from "./products.types";

export const fetchProducts = () =>
  createAction(PRODUCTS_ACTION_TYPES.PRODUCTS_FETCH);

export const productsSuccess = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.PRODUCTS_SUCCESS, productsArray);

export const productsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.PRODUCTS_FAILED, error);

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProducts());

    try {
      const res = await fetch("http://localhost:5000/products");
      const productsArray = await res.json();
      dispatch(productsSuccess(productsArray));
    } catch (error) {
      dispatch(productsFailed(error));
    }
  };
};
