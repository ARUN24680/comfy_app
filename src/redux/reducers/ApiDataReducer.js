import { API_DATA, API_DATA_FAILURE, API_DATA_REQUESTED } from "../types";

const iState = {
  ApiData: [],
  loading: false,
  error: "",
  singleProduct: [],
};

const apiCall = (state = iState, action) => {
  if (action.type === API_DATA) {
    return {
      ...state,
      loading: false,
      ApiData: action.payload,
    };
  } else if (action.type === API_DATA_REQUESTED) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === API_DATA_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else {
    return state;
  }
};
export default apiCall;
