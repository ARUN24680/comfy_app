import { Base_Url_Api } from "./BaseApi";

export const Api = {
  //all products details
  GET_ALL_PRODUCT: `${Base_Url_Api}react-store-products`,

  //single product detail
  GET_SINGLE_PRODUCT: `${Base_Url_Api}react-store-single-product?id=`
};
