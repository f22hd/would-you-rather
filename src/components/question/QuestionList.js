import React from "react";
import QuestionListItem from "./questionListItem";

class QuestionList extends React.Component {
  getUserInfo = userId => {
    return this.props.users[userId];
  };

  render() {
    return (
      <div>
        {this.props.questions.map((q, index) => (
          <QuestionListItem
            key={index}
            questionInfo={q}
            questionAuthorDetails={this.getUserInfo(q.author)}
            isAnswered={this.props.isAnswered}
          />
        ))}
      </div>
    );
  }
}

export default QuestionList;
