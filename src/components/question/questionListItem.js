import React from "react";
import { Link } from "react-router-dom";
import * as Helper from "../../core/Helper";

class QuestionListItem extends React.Component {
  render() {
    return (
      <Link
        to={`/question/${this.props.questionInfo.id}`}
        className="card my-2 "
      >
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
              <p className="text-black">Would You Rather...</p>
              <button type="button" className="btn btn-block btn-primary">
                View
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default QuestionListItem;
