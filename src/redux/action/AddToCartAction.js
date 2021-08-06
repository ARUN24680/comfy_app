import { ADD_TO_CART, CLEAR_CART, REMOVE, TOOGLE, CART_TOTALS } from "../types";

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
export const toogleAmount = (cartId, value) => {
  return {
    type: TOOGLE,
    payload: { cartId, value }
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const cartTotals = () => {
  return {
    type: CART_TOTALS
  };
};
