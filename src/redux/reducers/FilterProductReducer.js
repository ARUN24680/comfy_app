import {
  ALL_PRODUCTS,
  FILTER_PRODUCT,
  API_DATA_REQUESTED,
  API_DATA_FAILURE,
  GRID_VIEW,
  LIST_VIEW,
  SORT,
  SORT_PRODUCT,
  UPDATE_FILTER,
  SEARCH_FILTER,
  UPDATE_FILTER_CATEGORY,
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
  filter_all_product: [],
  all_products: [],
  loading: false,
  grid_view: true,
  sort: "price-lowest",
  error: ""
};

const FilterProductReducer = (state = istate, action) => {
  //
  //
  //
  //
  // FETCHING  ALL PRODUCT
  if (action.type === ALL_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    let max_Price = Math.max(...maxPrice);
    return {
      ...state,
      loading: false,
      all_products: [...action.payload],
      filter_all_product: [...action.payload],
      filter_product: {
        ...state.filter_product,
        maxPrice: max_Price,
        price: max_Price
      }
    };
  }
  //
  //
  //
  //
  //
  // API_DATA_REQUESTED
  else if (action.type === API_DATA_REQUESTED) {
    return {
      ...state,
      loading: true
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
  //
  //
  //
  //
  // GRID VIEW
  else if (action.type === LIST_VIEW) {
    return {
      ...state,
      grid_view: action.payload
    };
  }

  // LIST VIEW
  else if (action.type === GRID_VIEW) {
    return {
      ...state,
      grid_view: action.payload
    };
  }

  //
  //
  //
  //FILTER UPDATE SORT
  else if (action.type === SORT) {
    return {
      ...state,
      sort: action.payload
    };
  }

  //product SORT
  else if (action.type === SORT_PRODUCT) {
    const { sort, filter_all_product } = state;

    let tempProduct = [...filter_all_product];
    if (sort === "price-lowest") {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProduct = tempProduct.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProduct = tempProduct.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return {
      ...state,
      filter_all_product: tempProduct
    };
  }
  //
  //
  //
  //
  //FILTER UPDATE
  else if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;
    return {
      ...state,
      filter_product: { ...state.filter_product, [name]: value }
    };
  }

  //search FILTER
  else if (action.type === SEARCH_FILTER) {
    return { ...state };
  }

  //updateFiltersCategory
  else if (action.type === UPDATE_FILTER_CATEGORY) {
    // return { ...state, filter_product: {...state.category action.payload } };
  }

  //FILTER CLEAR
  else if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      loading: false,
      filter_product: action.payload
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
