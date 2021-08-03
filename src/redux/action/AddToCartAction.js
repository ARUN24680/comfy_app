import { ADD_TO_CART, CLEAR_CART, REMOVE, TOOGLE } from "../types";

export const addToCartProduct = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
};
export const removeItem = (id) => {
  return {
    type: REMOVE,
    payload: id
  };
};
export const toogleAmount = (id, value) => {
  return {
    type: TOOGLE
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: null
  };
};
