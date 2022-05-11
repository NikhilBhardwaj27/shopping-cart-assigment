import { createAction } from "../../utils/reducer.utils";
import BANNER_ACTION_TYPES from "./banner.types";

export const fetchBanner = () => createAction(BANNER_ACTION_TYPES.FETCH_BANNER);

export const bannerSuccess = (bannerArray) =>
  createAction(BANNER_ACTION_TYPES.BANNER_SUCCESS, bannerArray);

export const bannerFailed = (error) =>
  createAction(BANNER_ACTION_TYPES.BANNER_FAILED, error);

export const fetchBannerAsync = () => {
  return async (dispatch) => {
    dispatch(fetchBanner());

    try {
      const res = await fetch("http://localhost:5000/banners");
      const bannerArray = await res.json();
      dispatch(bannerSuccess(bannerArray));
    } catch (error) {
      dispatch(bannerFailed(error));
    }
  };
};
