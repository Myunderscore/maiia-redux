import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import SearchReducer from "./search";
import CounterReducer from "./counter";


const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  search: SearchReducer,
  counter: CounterReducer,
});

export default rootReducer;
