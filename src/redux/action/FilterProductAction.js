import {
  ALL_PRODUCTS,
  FILTER_PRODUCT,
  API_DATA_REQUESTED,
  API_DATA_FAILURE,
  GRID_VIEW,
  LIST_VIEW,
  SORT,
  UPDATE_FILTER,
  CLEAR_FILTER,
} from "../types";
import { products_url } from "../../utility/constants";
import axios from "axios";

// FETCHING  ALL PRODUCT
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
        payload: all_Product_Data,
      });
    } catch (e) {
      dispatch({ type: API_DATA_FAILURE, payload: e.message });
    }
  };
};

// GRID VIEW
export const gridView = (gridtrue) => {
  return {
    type: GRID_VIEW,
    payload: gridtrue,
  };
};

// LIST VIEW
export const listView = (gridfalse) => {
  return {
    type: LIST_VIEW,
    payload: gridfalse,
  };
};
//FILTER UPDATE
export const updateFilters = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  // console.log(name);

  return (dispatch) => {
    dispatch({
      type: UPDATE_FILTER,
      payload: { name, value },
    });
  };
};
//CLEAR FILTER
export const clearFilters = (e) => {
  let clearValue = e.target.value;
  // console.log(clearValue);

  return (dispatch) => {
    dispatch({
      type: CLEAR_FILTER,
      payload: clearValue,
    });
  };
};

//SORTTING

export const updateSort = (e) => {
  let clearValue = e.target.value;

  return (dispatch) => {
    dispatch({
      type: SORT,
      payload: clearValue,
    });
  };

  // return {
  //   type: SORT,
  //   payload: data
  // };
};
