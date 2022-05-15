import { createAction } from "../../utils/reducer.utils";
import CART_ACTION_TYPES from "./cart.types";

export const removeFromCart = (id) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART, id);

export const addToCart = (product) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART, product);

export const addToCartFailed = (error) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART_FAILED, error);

export const addToCartAsync = (product) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:5000/addToCart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: product.id }),
      });
      await res.json();
      dispatch(addToCart(product));
    } catch (error) {
      dispatch(addToCartFailed(error));
    }
  };
};
