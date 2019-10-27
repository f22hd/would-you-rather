import React from "react";
import { connect } from "react-redux";
import { addAnswer } from "../../store/actions/questions.action";
import { addUserAnswer } from "../../store/actions/users.action";
import { Redirect } from "react-router-dom";
import QuestionDetailsForm from "./QuestionDetailsForm";

class QuestionDetails extends React.Component {
  state = {
    toHome: false,
    questionId: ""
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
    const { toHome, questionId } = this.state;
    const { toLogin } = this.props;
    if (toHome) {
      return <Redirect to={`/vote/${questionId}`} />;
    }

    if (toLogin) {
      return <Redirect to={`/login`} />;
    }

    return (
      <div className="row justify-content-center">
        <div className="col-10">
          {this.props.questionInfo && this.props.questionAuthorDetails ? (
            <QuestionDetailsForm
              questionInfo={this.props.questionInfo}
              questionAuthorDetails={this.props.questionAuthorDetails}
              submit={this.onSubmit}
            />
          ) : (
            <p className="my-5">We couldn't find the question.</p>
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
      questionAuthorDetails: users ? users[questions[id].author] : null
    };
  } else {
    return {
      authedUser,
      id,
      questionInfo: {},
      questionAuthorDetails: {},
      toLogin: true
    };
  }
}
export default connect(mapToState)(QuestionDetails);
