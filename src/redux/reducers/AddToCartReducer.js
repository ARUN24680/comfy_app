import { ADD_TO_CART, CLEAR_CART, REMOVE, TOOGLE } from "../types";

const addToCartFn = () => {
  let cart = localStorage.getItem("cart");
  if (cart && cart.length > 0) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: addToCartFn(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};

const AddToCartProduct = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      const { id, mainColor, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + mainColor);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + mainColor) {
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
          id: id + mainColor,
          name: product.name,
          mainColor,
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

    case REMOVE:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: tempCart,
      };

    case TOOGLE:
      return {
        cart: null,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default AddToCartProduct;
