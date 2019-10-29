import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import Header from "./header/Header";
import NotFound from "./not-found/NotFound";
import AddQuestion from "./question/AddQuestion";
import QuestionDetails from "./question/QuestionDetails";
import LeaderBoard from "./leaderboard/LeaderBoard";

import { connect } from "react-redux";
import { handleInitialData } from "../store/actions/shared.action";
import logout from "./logout/logout";
import VotePage from "./vote/votePage";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Header></Header>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-10">
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/add" component={AddQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/question/:id" component={QuestionDetails} />
                <Route path="/vote/:id" exact component={VotePage} />
                <Route path="/logout" component={logout} />

                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
