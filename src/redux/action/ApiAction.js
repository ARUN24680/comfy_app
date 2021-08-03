import axios from "axios";
import { products_url } from "../../utility/constants";
import { API_DATA, API_DATA_FAILURE, API_DATA_REQUESTED } from "../types";

export const ApiAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: API_DATA_REQUESTED });
      const response = await axios.get(products_url);
      // console.log("reponse data------>", response.data);

      let filterData = response?.data?.filter((item) => item.featured);
      // console.log("fkter========>", filterData);
      dispatch({
        type: API_DATA,
        payload: filterData
      });
    } catch (e) {
      dispatch({ type: API_DATA_FAILURE, payload: e.message });
    }
  };
};
