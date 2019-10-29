import React from "react";
import * as Helper from "../../core/Helper";

export default class VoteDetails extends React.Component {
  state = {
    answerSelected: false
  };

  componentDidMount() {
    const { questionInfo, authedUserDetails } = this.props;
    if ((questionInfo, authedUserDetails)) {
      const authedUserAnswer = authedUserDetails.answers[questionInfo.id];
      console.log(authedUserAnswer);
      this.setState({ answerSelected: authedUserAnswer });
    }
  }
  render() {
    return (
      <div className="card my-2">
        <div className="card-title text-left bg-light p-2">
          <h6>{this.props.questionAuthorDetails.name} Asks:</h6>
          <small className="text-muted">
            {Helper.beutifyDate(this.props.questionInfo.timestamp)}
          </small>
        </div>
        <div className="card-body">
          <div className="row no-gutters">
            <div className="col-3">
              <img
                className="card-img"
                src={this.props.questionAuthorDetails.avatarURL}
                alt={this.props.questionAuthorDetails.name}
              />
            </div>
            <div className="col-8 d-flex flex-column m-auto">
              <h5 className="text-black">Results</h5>

              {/* first option */}
              <h6
                className={
                  this.state.answerSelected === "optionOne"
                    ? "text-primary"
                    : ""
                }
                className="my-3"
              >
                {this.props.questionInfo.optionOne.text}
              </h6>
              <div className="w-100">
                <span className="px-1">
                  {this.props.questionInfo.optionOne.votes.length}
                </span>
                <span className="text-muted">out of</span>
                <span className="px-1">
                  {this.props.questionInfo.optionOne.votes.length +
                    this.props.questionInfo.optionTwo.votes.length}
                </span>
              </div>

              {/* second option */}
              <h6
                className={
                  this.state.answerSelected === "optionTwo"
                    ? "text-primary "
                    : ""
                }
                className="my-3"
              >
                {this.props.questionInfo.optionTwo.text}
              </h6>
              <div className="w-100">
                <span className="px-1">
                  {this.props.questionInfo.optionTwo.votes.length}
                </span>
                <span className="text-muted">out of</span>
                <span className="px-1">
                  {this.props.questionInfo.optionOne.votes.length +
                    this.props.questionInfo.optionTwo.votes.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
