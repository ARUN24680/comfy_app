import {
  ALL_PRODUCTS,
  FILTER_PRODUCT,
  API_DATA_REQUESTED,
  API_DATA_FAILURE,
  GRID_VIEW,
  LIST_VIEW,
  SORT,
  UPDATE_FILTER,
  CLEAR_FILTER
} from "../types";

const istate = {
  filter_product: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false
  },
  all_products: [],
  loading: false,
  grid_view: true,
  sort: "price-lowest",
  error: ""
};

const FilterProductReducer = (state = istate, action) => {
  // FETCHING  ALL PRODUCT
  if (action.type === ALL_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    let max_Price = Math.max(...maxPrice);
    return {
      ...state,
      loading: false,
      all_products: [...action.payload],
      filter_product: {
        ...state.filter_product,
        maxPrice: max_Price,
        price: max_Price
      }
    };
  }
  // API_DATA_REQUESTED
  else if (action.type === API_DATA_REQUESTED) {
    return {
      ...state,
      loading: true
    };
  }
  // GRID VIEW
  else if (action.type === LIST_VIEW) {
    return {
      ...state,
      grid_view: action.payload
    };
  } else if (action.type === GRID_VIEW) {
    return {
      ...state,
      grid_view: action.payload
    };
  }
  //FILTER SORT
  else if (action.type === SORT) {
    return {
      ...state,
      sort: action.payload
    };
  }

  //API_DATA_FAILURE
  else if (action.type === API_DATA_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }
  //FILTER UPDATE
  else if (action.type === UPDATE_FILTER) {
    const {name ,value} = action.payload
    return {
      ...state,
      loading: false,
      filter_product: {...state} 
    };
  }
  //FILTER CLEAR
  else if (action.type === UPDATE_FILTER) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  } else {
    return state;
  }
};

export default FilterProductReducer;

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
