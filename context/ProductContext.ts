import { Configs } from "@/interface/AppleInterface";
import { createContext } from "react";

export interface StateType {
  chip: Configs;
  memory: Configs;
  storage: Configs;
  power: Configs;
  keyboard: string;
  price: number;
  [key: string]: any;
}

export type ActionType = {
  type: "CHANGE_STATE";
  payload: {
    field: keyof StateType | string;
    value: any;
  };
};

export const PRODUCT_INITIAL_STATE: StateType = {
  chip: {
    label: "",
    slug: "",
    priceAddOn: 0,
  },
  memory: {
    label: "",
    slug: "",
    priceAddOn: 0,
    requireChip: null,
    includeChip: null,
  },
  storage: {
    label: "",
    slug: "",
    priceAddOn: 0,
    requireChip: null,
    includeChip: null,
  },

  power: {
    label: "",
    slug: "",
    priceAddOn: 0,
    requireChip: null,
    includeChip: null,
  },
  keyboard: "",
  price: 0,
};

export const ProductContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: PRODUCT_INITIAL_STATE,
  dispatch: () => {},
});

export const ProductReducer = (
  state: StateType,
  action: ActionType,
): StateType => {
  switch (action.type) {
    case "CHANGE_STATE":
      const { field, value } = action.payload;

      let newPrice = state.price;

      if (field === "price") {
        newPrice = value;
      } else if (
        field === "chip" ||
        field === "storage" ||
        field === "memory" ||
        field === "power"
      ) {
        newPrice += (value.priceAddOn || 0) - (state[field]?.priceAddOn || 0);
      }

      return {
        ...state,
        [field]: value,
        price: newPrice,
      };
    default:
      return state;
  }
};
