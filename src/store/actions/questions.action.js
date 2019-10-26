export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const FETCH_QUESTION = "FETCH_QUESTION";

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}
export function addQuestion(questions) {
  return {
    type: ADD_QUESTION,
    questions
  };
}

export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer
  };
}

export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS
  };
}
