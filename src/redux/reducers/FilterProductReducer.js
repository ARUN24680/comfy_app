import {
  ALL_PRODUCTS,
  FILTER_PRODUCT_DISPLAY,
  API_DATA_REQUESTED,
  API_DATA_FAILURE,
  GRID_VIEW,
  LIST_VIEW,
  SORT,
  SORT_PRODUCT,
  UPDATE_FILTER,
  SEARCH_FILTER,
  CLEAR_FILTER
} from "../types";
import { products_url } from "../../utility/constants";

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
    const { all_products } = state;
    let tempProducts = [...all_products];
    const {
      text,
      category,
      company,
      color,

      price,
      shipping
    } = state.filter_product;
    // filtering
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    return { ...state, filter_all_product: tempProducts };

    // return { ...state };
  }

  //FILTER CLEAR
  else if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filter_product: {
        ...state.filter_product,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filter_product.maxPrice,
        shipping: false
      }
    };
  }
  //FILTER_PRODUCT_DISPLAY
  else if (action.type === FILTER_PRODUCT_DISPLAY) {
  }

  //
  //
  //
  //
  else {
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
