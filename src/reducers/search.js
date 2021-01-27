import { SEARCH } from "../actions/action-types";

const initialState = {
  contents: [],
  value: "",
  //products: [],
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      const { value } = action;
      //const products = state.contents.filter((val) => val.includes(value));
      return { ...state, value };
    }
    default:
      return state;
  }
}

