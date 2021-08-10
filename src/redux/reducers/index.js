import { combineReducers } from "redux";

import sidebar from "./SidebarReducer";
import apiProduct from "./ApiDataReducer";
import singleProduct from "./SingleProductReducer";
import filterProduct from "./FilterProductReducer";
import AddToCart from "./AddToCartReducer";
import Protect from "./Protect";

const rootReducer = combineReducers({
  sidebarReducer: sidebar,
  apiDataReducer: apiProduct,
  singleProductReducer: singleProduct,
  filterProductReducer: filterProduct,
  addToCartReducer: AddToCart,
  protectRouteReducer: Protect
});

export default rootReducer;
