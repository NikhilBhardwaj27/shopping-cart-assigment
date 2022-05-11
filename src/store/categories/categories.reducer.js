import CATEGORIES_ACTION_TYPES from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH:
      return { ...state, loading: true };
    case CATEGORIES_ACTION_TYPES.CATEGORIES_SUCCESS:
      return { ...state, categories: payload, loading: false };
    case CATEGORIES_ACTION_TYPES.CATEGORIES_FAILED:
      return { ...state, error: payload, loading: false };
    default:
      return { ...state };
  }
};
