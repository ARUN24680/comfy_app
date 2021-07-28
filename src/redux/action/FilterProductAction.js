import {
  ALL_PRODUCTS,
  FILTER_PRODUCT,
  API_DATA_REQUESTED,
  API_DATA_FAILURE
} from "../types";
import { products_url } from "../../utility/constants";
import axios from "axios";

export const FilterProductAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: API_DATA_REQUESTED });

      const response = await axios.get(products_url);
    //   console.log("reponse data filter------>", response);
      let all_Product_Data = response.data;
      // console.log("fkter========>", filterData);
      dispatch({
        type: ALL_PRODUCTS,
        payload: all_Product_Data
      });
    } catch (e) {
      dispatch({ type: API_DATA_FAILURE, payload: e.message });
    }
  };
};
