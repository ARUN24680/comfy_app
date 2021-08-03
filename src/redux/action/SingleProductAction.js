import axios from "axios";
import { SINGLE_PRODUCT, API_DATA_REQUESTED, API_DATA_FAILURE } from "../types";
import { single_product_url } from "../../utility/constants";

export const singleProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: API_DATA_REQUESTED });
      const response = await axios.get(`${single_product_url}${data}`);
      // console.log(response.data);
      dispatch({
        type: SINGLE_PRODUCT,
        payload: response.data
      });
    } catch (e) {
      dispatch({ type: API_DATA_FAILURE, payload: e.message });
    }
  };
};
