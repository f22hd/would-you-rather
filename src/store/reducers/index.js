import { combineReducers } from "redux";

// reducers
import users from "./users.reducer";
import questions from "./questions.reducer";
import authedUser from "./authedUser.reducer";

export default combineReducers({
  authedUser, // => authedUser : authedUser
  questions,
  users
});
