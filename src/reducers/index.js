import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import SearchReducer from "./search";

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  search: SearchReducer,
});

export default rootReducer;
