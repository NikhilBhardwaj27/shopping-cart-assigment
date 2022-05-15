import PRODUCTS_ACTION_TYPES from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.PRODUCTS_FETCH:
      return { ...state, loading: true };
    case PRODUCTS_ACTION_TYPES.PRODUCTS_SUCCESS:
      return { ...state, products: payload, loading: false };
    case PRODUCTS_ACTION_TYPES.PRODUCTS_FAILED:
      return { ...state, error: payload, loading: false };
    default:
      return { ...state };
  }
};
