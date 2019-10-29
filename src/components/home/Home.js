import React from "react";
import QuestionList from "../question/QuestionList";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    questions: [],
    showing: "",
    isAnswered: false
  };

  /**
   * params: question object
   * return : boolean
   */
  haveVotesOnQuestion = question => {
    const { authedUser } = this.props;
    const resOpt1 = question.optionOne.votes.find(v => v === authedUser);
    const resOpt2 = question.optionTwo.votes.find(v => v === authedUser);
    return resOpt1 || resOpt2;
  };
  /**
   * params: array : questions list
   * return : boolean
   */
  hasVotes = list => {
    const resultList = Object.keys(list).filter(q => {
      return this.hasVotesOnQuestion(list[q]);
    });

    return resultList.length > 0;
  };

  getQuestions = (isAnswered = true) => {
    const { questions } = this.props;

    let questionArr = [];
    Object.keys(questions).forEach(q => {
      const res = this.haveVotesOnQuestion(questions[q]);
      if (isAnswered && res) {
        // has votes , add the question to array.
        questionArr.push(questions[q]);
      } else if (!isAnswered && !res) {
        // doesn't have answer on this question
        questionArr.push(questions[q]);
      }
    });

    return questionArr;
  };

  // filterization by authed user
  showUnansweredQuestions = () => {
    const result = this.getQuestions(false);
    this.sortAndSave(result);
    this.setState({ showing: "Unanswered Questions", isAnswered: false });
  };

  showAnsweredQuestions = () => {
    const result = this.getQuestions(true);
    this.sortAndSave(result);
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
