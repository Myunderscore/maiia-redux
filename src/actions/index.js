import { SET_AUTHENTIFICATION, SEARCH, ADD, REMOVE } from "./action-types";

export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn,
  };
}

export function search(value) {
  return { type: SEARCH, value };
}

export function add(value) {
  return {
    type: ADD,
    payload: value,
  };
}

export function remove(value) {
  return {
    type: REMOVE,
    payload: value,
  };
}
