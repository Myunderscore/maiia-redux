import { ADD, REMOVE } from "../actions/action-types";

const initialState = { basket: [], value: "" };

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      const { value } = action;
      let basket = state.basket.concat(action.value);
      return { ...state, value, basket };

    case "REMOVE":
      basket = state.basket.filter((value) => value !== action.value, 1);
      return { ...state, value, basket };

    default:
      return state;
  }
}
