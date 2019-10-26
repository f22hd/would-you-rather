export const ADD_USERS = "ADD_USERS";
export const FETCH_USERES = "FETCH_USERES";
export const FETCH_USER = "FETCH_USER";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
// Start Users Actions
export function addUsers(users) {
  return {
    type: ADD_USERS,
    users
  };
}

export function fetchUsers() {
  return {
    type: FETCH_USERES
  };
}

export function fetchUserById(userId) {
  return {
    type: FETCH_USER,
    userId
  };
}

export function addUserAnswer(userAnswer) {
  return {
    type: ADD_USER_ANSWER,
    userAnswer
  };
}

// End Users Actions
