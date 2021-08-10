import { PRIVATE_ROUTE } from "../types";

export const protectRoute = (auth_data) => {
  return {
    type: PRIVATE_ROUTE,
    payload: auth_data
  };
};
