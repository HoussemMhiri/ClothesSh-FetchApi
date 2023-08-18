import { combineReducers } from "redux";
import { selectProductReducer, setProductsReducer } from "./reducers";

export const reducers = combineReducers({
  allProducts: setProductsReducer,
  product: selectProductReducer,
});
