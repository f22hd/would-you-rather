export const SET_AUTHED_USER = "ADD_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";
export const FETCH_AUTHED_USER = "FETCH_AUTHED_USER";

// Start  Authed User Actions
export function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    userId
  };
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER
  };
}

export function fetchAuthedUser() {
  return {
    type: FETCH_AUTHED_USER
  };
}
// End Authed User Actions.
