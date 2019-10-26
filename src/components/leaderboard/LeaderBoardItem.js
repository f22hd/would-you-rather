import React from "react";

export default class LeaderBoardItem extends React.Component {
  state = {
    answersNo: 0,
    questionsNo: 0,
    score: 0
  };

  getObjectLength = obj => {
    return Object.keys(obj).length;
  };

  calculateScore = (questionsNo, answeredNo) => {
    return questionsNo + answeredNo;
  };

  componentDidMount() {
    const answeredNo = this.getObjectLength(this.props.user.answers);
    const questionsNo = this.props.user.questions.length; // it's an array
    const score = this.calculateScore(questionsNo, answeredNo);

    this.setState({ answeredNo, questionsNo, score });
  }

  render() {
    return (
      <tr>
        <td> {this.props.index + 1} </td>
        <td>
          <img
            src={this.props.user.avatarURL}
            alt={this.props.user.name}
            className="img-user"
          />
        </td>
        <td>{this.props.user.name}</td>
        <td>{this.state.questionsNo}</td>
        <td>{this.state.answeredNo}</td>
        <td>{this.state.score}</td>
      </tr>
    );
  }
}
