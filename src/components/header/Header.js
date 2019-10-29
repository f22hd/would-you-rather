import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <header className="App-header">
        <nav>
          <ul>
            {this.props.isLoggedIn ? (
              <div>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add Question</Link>
                </li>
                <li>
                  <Link to="/leaderboard">Leaderboard</Link>
                </li>

                <li className="mx-3">
                  <small className="d-inline-block">
                    Hello,
                    {this.props.authedUserDetails.name}
                  </small>
                  <img
                    className="img-profile mx-1"
                    src={this.props.authedUserDetails.avatarURL}
                    height="45"
                    alt={this.props.authedUserDetails.name}
                  />
                </li>

                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </div>
            ) : (
              <Redirect to="/not-found" />
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

function mapToState({ authedUser, users }) {
  return {
    isLoggedIn: authedUser != null,
    authedUserDetails: users[authedUser]
  };
}
export default connect(mapToState)(Header);
