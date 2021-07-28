import { OPENED, CLOSED } from "../types";

const addSider = (data) => {
  return {
    type: OPENED,
    payload: data
  };
};

const removeSider = (data) => {
  return {
    type: CLOSED,
    payload: data
  };
};

export { addSider, removeSider };
