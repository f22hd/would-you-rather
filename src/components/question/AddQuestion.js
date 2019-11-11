import React from "react";
import { connect } from "react-redux";
import { saveQuestion } from "../../store/actions/questions.action";
import { generateUID } from "../../utils/_DATA";
import { Redirect } from "react-router-dom";

class AddQuestion extends React.Component {
  state = {
    question: {
      id: "",
      author: "",
      optionOne: {
        votes: [],
        text: ""
      },
      optionTwo: {
        votes: [],
        text: ""
      },
      timestamp: null
    },
    toHome: false
  };

  submit = e => {
    e.preventDefault();
    // save question details
    let { question } = this.state;

    // add unique id to the question
    question.id = generateUID();
    question.author = this.props.authedUser;

    this.props.dispatch(saveQuestion(question));
    //go back to homepage.
    this.setState({ toHome: true });
  };

  onoptionOneChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.updateState("optionOne", value);
  };

  onoptionTwoChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.updateState("optionTwo", value);
  };

  // generic function for updating question state
  updateState = (key, value) => {
    this.setState(currentState => {
      const { question } = currentState;
      question[key].text = value;
      return question;
    });
  };

  render() {
    const { question } = this.state;
    const isDisabled =
      question.optionOne.text && question.optionTwo.text ? false : true;

    return (
      <div className="row justify-content-center">
        {this.state.toHome && <Redirect to="/home" />}
        <div className="col-6">
          <form onSubmit={this.submit}>
            <div className="form-group">
              <input
                autoFocus
                className="form-control"
                type="text"
                name="optionOne"
                placeholder="optionOne"
                value={this.state.question.optionOne.text}
                onChange={this.onoptionOneChange}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="optionTwo"
                placeholder="optionTwo"
                value={this.state.question.optionTwo.text}
                onChange={this.onoptionTwoChange}
              />
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapToState({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapToState)(AddQuestion);
