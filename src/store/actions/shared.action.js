import { addUsers } from "./users.action";
import { addQuestion } from "./questions.action";
import { setAuthedUser } from "./authedUser.action";
import { getInitialData } from "../../utils/api";

const AUTHED_USER_ID = null; // "tylermcginnis";
export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(AUTHED_USER_ID));
      dispatch(addUsers(users));
      dispatch(addQuestion(questions));
    });
  };
}
