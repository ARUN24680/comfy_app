import { PRIVATE_ROUTE } from "../types";

const istate = {
  myUser: "",
};

const Protect = (state = istate, action) => {
  switch (action.type) {
    case PRIVATE_ROUTE:
      return {
        ...state,
        myUser: action.payload,
      };

    default:
      return state;
  }
};

export default Protect;
