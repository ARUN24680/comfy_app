import { OPENED, CLOSED } from "../types";

const iState = {
  sidebar: false,
};

const Sidebar = (state = iState, action) => {
  switch (action.type) {
    case OPENED:
      return { ...state, sidebar: action.payload };

    case CLOSED:
      return { ...state, sidebar: action.payload };

    default:
      return state;
  }
};

export default Sidebar;
