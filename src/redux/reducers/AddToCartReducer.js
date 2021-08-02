import { ADD_TO_CART } from "../types";

// function addToCartFn() {
//   let cart = localStorage.getItem("cart");
//   if (cart && cart.length > 0) {
//     return cart;
//   }

//   return [];
// }

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};

const AddToCartProduct = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }

    default:
      return state;
  }
};

export default AddToCartProduct;
