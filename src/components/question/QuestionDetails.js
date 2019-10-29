import React from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../store/actions/questions.action";
import { addUserAnswer } from "../../store/actions/users.action";
import { Redirect } from "react-router-dom";
import QuestionDetailsForm from "./QuestionDetailsForm";
import VoteDetails from "../vote/voteDetails";

class QuestionDetails extends React.Component {
  state = {
    toHome: false,
    questionId: "",
    isAnswered: false
  };

  onSubmit = optionKey => {
    // save in store
    const questionId = this.props.questionInfo.id;
    const userId = this.props.authedUser;

    const toStore = {
      questionId,
      optionKey,
      userId
    };

    // add to question answers
    this.props.dispatch(addAnswer(toStore));
    // add to user answers
    this.props.dispatch(addUserAnswer(toStore));

    this.setState({ toHome: true, questionId });
  };

  render() {
    const {
      toHome,
      toLogin,
      questionId,
      authedUserDetails,
      questionInfo,
      isAnswered,
      questionAuthorDetails
    } = this.props;

    if (toHome) {
      return <Redirect to={`/vote/${questionId}`} />;
    }

    if (toLogin) {
      return <Redirect to={`/login`} />;
    }

    return (
      <div className="row justify-content-center">
        <div className="col-10">
          {questionInfo && questionAuthorDetails && !isAnswered ? (
            <QuestionDetailsForm
              questionInfo={questionInfo}
              questionAuthorDetails={questionAuthorDetails}
              submit={this.onSubmit}
            />
          ) : (
            <VoteDetails
              questionInfo={questionInfo}
              authedUserDetails={authedUserDetails}
              questionAuthorDetails={questionAuthorDetails}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapToState({ authedUser, questions, users }, props) {
  const { id } = props.match.params;

  if (Object.keys(users).length > 0 && Object.keys(questions).length > 0) {
    return {
      authedUser,
      id,
      questionInfo: questions[id],
      questionAuthorDetails: users ? users[questions[id].author] : null,
      authedUserDetails: users[authedUser],
      isAnswered: users[authedUser].answers[id] ? true : false
    };
  } else {
    return {
      authedUser,
      id,
      questionInfo: {},
      questionAuthorDetails: {},
      toLogin: true,
      authedUserDetails: {},
      isAnswered: false
    };
  }
}
export default connect(mapToState)(QuestionDetails);
