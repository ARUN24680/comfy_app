import {
  ALL_PRODUCTS,
  FILTER_PRODUCT,
  API_DATA_REQUESTED,
  API_DATA_FAILURE
} from "../types";

const istate = {
  filter_product: [],
  all_products: [],
  loading: false,
  grid_view: false,
  error: ""
};
const FilterProductReducer = (state = istate, action) => {
  if (action.type === ALL_PRODUCTS) {
    return {
      ...state,
      loading: false,
      all_products: action.payload
    };
  } else if (action.type === API_DATA_REQUESTED) {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === API_DATA_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  } else {
    return state;
  }

  // switch (action.type) {
  //   case action.type === ALL_PRODUCTS: {
  //     return {
  //       ...state,
  //       loading: false,
  //       all_products: action.payload
  //     };
  //   }
  //   case action.type === API_DATA_REQUESTED: {
  //     return {
  //       ...state,
  //       loading: true
  //     };
  //   }
  //   case action.type === API_DATA_FAILURE: {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: action.payload
  //     };
  //   }
  //   default:
  //     return state;
  // }
};

export default FilterProductReducer;
