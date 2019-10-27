import React from "react";
import QuestionList from "../question/QuestionList";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    questions: [],
    showing: "",
    isAnswered: false
  };
  // filterization by authed user
  showUnansweredQuestions = () => {
    const { questions, authedUser } = this.props;
    const templist = Object.keys(this.props.questions).filter(q => {
      const resOpt1 = questions[q].optionOne.votes.find(
        vote => vote === authedUser
      );
      const resOpt2 = questions[q].optionTwo.votes.find(
        vote => vote === this.props.authedUser
      );

      return !resOpt1 || !resOpt2;
    });

    let temp = [];
    templist.forEach(key => {
      temp.push(questions[key]);
    });

    this.sortAndSave(temp);
    this.setState({ showing: "Unanswered Questions", isAnswered: false });
  };

  showAnsweredQuestions = () => {
    const { questions, authedUser } = this.props;
    const templist = Object.keys(this.props.questions).filter(q => {
      const resOpt1 = questions[q].optionOne.votes.find(
        vote => vote === authedUser
      );
      const resOpt2 = questions[q].optionTwo.votes.find(
        vote => vote === this.props.authedUser
      );

      return resOpt1 || resOpt2;
    });
    let temp = [];
    templist.forEach(key => {
      temp.push(questions[key]);
    });
    this.sortAndSave(temp);
    this.setState({ showing: "Answered Questions", isAnswered: true });
  };
  //End showAnsweredQuestions

  sortAndSave = list => {
    const sortedList = list.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

    this.setState({ questions: sortedList });
  };

  componentDidMount() {
    this.showAnsweredQuestions();
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8 d-flex justify-content-around">
          <button
            className="btn btn-clear"
            onClick={this.showUnansweredQuestions}
          >
            UnAnswered Questions
          </button>
          <button
            type="button"
            className="btn btn-clear"
            onClick={this.showAnsweredQuestions}
          >
            Answered Questions
          </button>
        </div>
        <div className="col-12">
          <h4 className="text-secondary">{this.state.showing}</h4>
        </div>
        <div className="col-8">
          <QuestionList
            questions={this.state.questions}
            users={this.props.users}
            isAnswered={this.state.isAnswered}
          />
        </div>
      </div>
    );
  }
}

function mapToState({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}
export default connect(mapToState)(Home);
