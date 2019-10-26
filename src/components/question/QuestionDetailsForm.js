import React from "react";

export default class QuestionDetailsForm extends React.Component {
  state = {
    answer: ""
  };
  onChange = e => {
    const answer = e.target.value;
    this.setState({ answer });
  };

  onSubmit = e => {
    e.preventDefault();
    const optionKey = this.getOptionKey();
    this.props.submit(optionKey);
  };

  getOptionKey = () => {
    return this.props.questionInfo.optionOne.text === this.state.answer
      ? "optionOne"
      : "optionTwo";
  };

  render() {
    const isDisabled = this.state.answer === "" ? true : false;

    return (
      <div className="card">
        <div className="row no-gutters">
          <div className="col-3">
            <img
              className="card-img"
              src={this.props.questionAuthorDetails.avatarURL}
              alt={this.props.questionAuthorDetails.name}
            />
            <p className="text-center">
              {this.props.questionAuthorDetails.name}
            </p>
          </div>
          <div className="col-8 d-flex flex-column m-auto">
            <h4>Would You Rather...</h4>
            <form className="form" onSubmit={this.onSubmit}>
              <div className="form-group form-check">
                <input
                  className="mx-3"
                  type="radio"
                  name="answer"
                  id="answer1"
                  checked={
                    this.state.answer === this.props.questionInfo.optionOne.text
                  }
                  value={this.props.questionInfo.optionOne.text}
                  onChange={this.onChange}
                />
                <label className="form-check-label" htmlFor="answer1">
                  {this.props.questionInfo.optionOne.text}
                </label>
              </div>
              <div className="form-group form-check">
                <input
                  className="mx-3"
                  type="radio"
                  name="answer"
                  checked={
                    this.state.answer === this.props.questionInfo.optionTwo.text
                  }
                  value={this.props.questionInfo.optionTwo.text}
                  onChange={this.onChange}
                  id="answer2"
                />
                <label className="form-check-label" htmlFor="answer2">
                  {this.props.questionInfo.optionTwo.text}
                </label>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-block btn-primary"
                  disabled={isDisabled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
