import { IAction, IDeafaultState } from "../types";

const deafaultState: IDeafaultState = {
  logined: localStorage.getItem("user") ? true : false,
  data: [],
  activeParrent: "0",
  loading: true,
};

export const reducer = (state = deafaultState, action: IAction) => {
  switch (action.type) {
    case "LOG_THE_SYSTEM":
      return { ...state, logined: true };
    case "LOG_OUT_THE_SYSTEM":
      return { ...state, logined: false };
    case "CHOOSE_ANOTHER_PARENT":
      return { ...state, activeParrent: action.payload };
    case "STOP_LOADING":
      return { ...state, loading: false };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
