import { ADD_TO_CART } from "../types";

const AddToCartProduct = (data) => {

  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
// const RemoveItem = (id) => {
//   return {
//     type:  ,
//     payload:  ,
//   };
// };
// const ToogleAmount = (id,value) => {
//   return {
//     type:    ,
//     payload:  ,
//   };
// };

// const ClearCart = (  ) => {
//   return {
//     type: ,
//     payload:  ,
//   };
// };

export default AddToCartProduct;
