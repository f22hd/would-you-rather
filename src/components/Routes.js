import React, { Fragment } from "react";
import AddQuestion from "./question/AddQuestion";
import QuestionDetails from "./question/QuestionDetails";
import LeaderBoard from "./leaderboard/LeaderBoard";
import logout from "./logout/logout";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import { connect } from "react-redux";
import NotFound from "./not-found/NotFound";

class Routes extends React.Component {
  componentDidMount() {
    this.props.history.push(window.location.pathname);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Login} />
          {/* only accessing by authed user , otherwise will redirect to not found page */}
          {this.props.isLoggedIn && (
            <Fragment>
              <Route path="/home" component={Home} />
              <Route path="/add" component={AddQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/question/:id" component={QuestionDetails} />
              <Route path="/logout" component={logout} />
            </Fragment>
          )}

          <Route component={NotFound} />
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
export default withRouter(connect(mapToState)(Routes));
