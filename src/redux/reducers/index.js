import { combineReducers } from "redux";
import sidebar from "./SidebarReducer";
import apiProduct from "./ApiDataReducer";
import singleProduct from "./SingleProductReducer";
import filterProduct from "./FilterProductReducer";
const rootReducer = combineReducers({
  sidebarReducer: sidebar,
  apiDataReducer: apiProduct,
  singleProductReducer: singleProduct,
  filterProductReducer: filterProduct
});

export default rootReducer;
