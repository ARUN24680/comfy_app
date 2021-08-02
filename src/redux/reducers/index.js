import { combineReducers } from "redux";
import sidebar from "./SidebarReducer";
import apiProduct from "./ApiDataReducer";
import singleProduct from "./SingleProductReducer";
import filterProduct from "./FilterProductReducer";
import addCart from "./AddToCartReducer";
const rootReducer = combineReducers({
  sidebarReducer: sidebar,
  apiDataReducer: apiProduct,
  singleProductReducer: singleProduct,
  filterProductReducer: filterProduct,
  AddToCartReducer: addCart,
});

export default rootReducer;
