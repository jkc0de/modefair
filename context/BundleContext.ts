"use client";
import { createContext } from "react";

type StateType = {
  tab: string;
  chip: string;
};

type TabActionType = {
  type: "CHANGE_TAB";
  payload: string;
};

type ChipActionType = {
  type: "CHANGE_CHIP";
  payload: string;
};

type ActionType = TabActionType | ChipActionType;

export const BUNDLE_INITIAL_STATE = {
  tab: "14-inch",
  chip: "",
};

export const BundleContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: BUNDLE_INITIAL_STATE,
  dispatch: () => {},
});

export const BundleReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_TAB":
      return {
        ...state,
        tab: action.payload,
      };
    case "CHANGE_CHIP":
      return {
        ...state,
        chip: action.payload,
      };
    default:
      return state;
  }
};
