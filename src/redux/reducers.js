import { actionTypes } from "./actionTypes";

const initState = {
  products: [],
};

export const setProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selectProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECT_PRODUCT:
      return {};

    default:
      return state;
  }
};
