import React from "react";
import AddQuestion from "./question/AddQuestion";
import QuestionDetails from "./question/QuestionDetails";
import LeaderBoard from "./leaderboard/LeaderBoard";
import logout from "./logout/logout";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import { connect } from "react-redux";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Login} />

          {/* only accessing by authed user , otherwise will redirect to not found page */}
          {this.props.isLoggedIn && (
            <div>
              <Route path="/home" component={Home} />
              <Route path="/add" component={AddQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/question/:id" component={QuestionDetails} />
              <Route path="/logout" component={logout} />
            </div>
          )}

          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

function mapToState({ authedUser }) {
  return {
    isLoggedIn: authedUser ? true : false
  };
}
export default connect(mapToState)(Routes);
