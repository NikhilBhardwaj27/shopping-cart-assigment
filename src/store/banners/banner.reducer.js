import BANNER_ACTION_TYPES from "./banner.types";

export const BANNER_INITIAL_STATE = {
  banners: [],
  loading: false,
  error: null,
};

export const bannerReducer = (
  state = BANNER_INITIAL_STATE, 
  action = {}
  ) => {
  const { type, payload } = action;

  switch (type) {
    case BANNER_ACTION_TYPES.FETCH_BANNER:
      return { ...state, loading: true };
    case BANNER_ACTION_TYPES.BANNER_SUCCESS:
      return { ...state, banners: payload, loading: false };
    case BANNER_ACTION_TYPES.BANNER_FAILED:
      return { ...state, error: payload, loading: false };
    default:
      return { ...state };
  }
};
