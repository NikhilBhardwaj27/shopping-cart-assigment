import { createAction } from "../../utils/reducer.utils";
import CATEGORIES_ACTION_TYPES from "./categories.types";

export const fetchCategories = () =>
  createAction(CATEGORIES_ACTION_TYPES.CATEGORIES_FETCH);

export const categoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.CATEGORIES_SUCCESS, categoriesArray);

export const categoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategories());

    try {
      const res = await fetch("http://localhost:5000/categories");
      const categoriesArray = await res.json();
      dispatch(categoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(categoriesFailed(error));
    }
  };
};
