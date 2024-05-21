"use client";
import { createContext } from "react";

type StateType = {
  footer: React.ReactNode | null;
};

type ActionType = {
  type: "CHANGE_FOOTER";
  payload: React.ReactNode;
};

export const FOOTER_INITIAL_STATE = {
  footer: null,
};

export const FooterContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: FOOTER_INITIAL_STATE,
  dispatch: () => {},
});

export const FooterReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_FOOTER":
      return {
        ...state,
        footer: action.payload,
      };
    default:
      return state;
  }
};
