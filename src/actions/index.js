import { SET_AUTHENTIFICATION, SEARCH } from "./action-types";

export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn,
  };
}

export function search(value) {
  return {type: SEARCH, value};
}
