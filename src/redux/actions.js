import { actionTypes } from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectProduct = (product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};
export const RemoveSelectProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECT_PRODUCT,
  };
};
