import React from "react";
import { Link } from "react-router-dom";

class QuestionListItem extends React.Component {
  render() {
    return (
      <Link
        to={`/question/${this.props.questionInfo.id}`}
        className="card my-2 "
      >
        <h5 className="card-title text-left bg-light p-2">
          {this.props.questionAuthorDetails.name} Asks:
        </h5>
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
