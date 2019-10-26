import {
  ADD_QUESTION,
  SAVE_QUESTION,
  ADD_ANSWER
} from "../actions/questions.action";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      const { question } = action;
      question.timestamp = new Date().getTime();
      return {
        ...state,
        [question.id]: question
      };

    case ADD_ANSWER:
      const { questionId, optionKey, userId } = action.answer;

      // find question object
      const questionObj = state[questionId];
      // add new vote to the list
      let votes = questionObj[optionKey].votes;
      questionObj[optionKey].votes = votes.concat([userId]);

      return {
        ...state,
        [questionObj.id]: questionObj
      };

    default:
      return state;
  }
}
