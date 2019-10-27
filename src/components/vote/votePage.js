import React from "react";
import { connect } from "react-redux";
import VoteDetails from "./voteDetails";

class VotePage extends React.Component {
  compnentDidMount() {}

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          {this.props.questionInfo &&
          Object.keys(this.props.questionInfo).length > 0 ? (
            <div>
              <VoteDetails
                questionInfo={this.props.questionInfo}
                questionAuthorDetails={this.props.questionAuthorDetails}
              />
            </div>
          ) : (
            <p className="text-center text-danger">No vote details</p>
          )}
        </div>
      </div>
    );
  }
}
function mapToState({ questions, users }, props) {
  const { id: questionId } = props.match.params;

  if (Object.keys(questions).length > 0 && Object.keys(users).length > 0) {
    const questionInfo = questions[questionId];

    const questionAuthorDetails = questionInfo
      ? users[questionInfo.author]
      : {};
    return {
      questionInfo,
      questionAuthorDetails
    };
  } else {
    return {
      questionInfo: {},
      questionAuthorDetails: {}
    };
  }
}
export default connect(mapToState)(VotePage);
