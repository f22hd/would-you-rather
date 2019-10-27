import { ADD_USERS, ADD_USER_ANSWER } from "../actions/users.action";

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        ...action.users
      };

    case ADD_USER_ANSWER:
      const { questionId, optionKey, userId } = action.userAnswer;
      const user = state[userId];

      user.answers = {
        ...user.answers,
        [questionId]: optionKey
      };
      return {
        ...state,
        [user.id]: user
      };

    default:
      return state;
  }
}
