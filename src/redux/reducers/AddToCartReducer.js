import { ADD_TO_CART, CLEAR_CART, REMOVE, TOOGLE, CART_TOTALS } from "../types";

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
  switch (action.type) {
    //ADD_TO_CART
    case ADD_TO_CART: {
      const { id, mainColor, amount, product } = action.payload;
      const cartState = [...state.cart];
      const tempItem = cartState.find((i) => i.id === id + mainColor);

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
    }
    //REMOVE
    case REMOVE:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: tempCart,
      };

    //TOOGLE
    case TOOGLE: {
      const { cartId, value } = action.payload;
      // let amountToggle = [...state.cart];
      const newCartValue = state.cart.map((item) => {
        if (item.id === cartId) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      return {
        ...state,
        cart: newCartValue,
      };
    }
    //CLEAR_CART

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    //CART_TOTALS
    case CART_TOTALS:
      const cart_checkout = [...state.cart ];
      const { total_items, total_amount } = cart_checkout.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      console.log("totali tiensn=>", total_items);
      console.log("totali amount=>", total_amount);

      return {
        ...state,
        total_items,
        total_amount,
      };

    default:
      return state;
  }
};

export default AddToCartProduct;
