import React from "react";
import QuestionListItem from "./questionListItem";

class QuestionList extends React.Component {
  getUserInfo = userId => {
    return this.props.users[userId];
  };

  render() {
    return (
      <div>
        {this.props.questions.length > 0 ? (
          this.props.questions.map((q, index) => (
            <QuestionListItem
              key={index}
              questionInfo={q}
              questionAuthorDetails={this.getUserInfo(q.author)}
              isAnswered={this.props.isAnswered}
            />
          ))
        ) : (
          <h4 className="text-center text-primary mt-5">
            Great, you are voted all questions. Thanks
          </h4>
        )}
      </div>
    );
  }
}

export default QuestionList;
