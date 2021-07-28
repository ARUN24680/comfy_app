import { SINGLE_PRODUCT, API_DATA_FAILURE, API_DATA_REQUESTED } from "../types";

const iState = {
  singleProduct: [],
  loading: false,
  error: ""
};

const SingleProductReducer = (state = iState, action) => {
  if (action.type === SINGLE_PRODUCT) {
    return {
      ...state,
      loading: false,
      singleProduct: action.payload
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
};
export default SingleProductReducer;
