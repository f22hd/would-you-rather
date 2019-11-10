import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../store/actions/shared.action";

import "./App.css";
import Header from "./header/Header";
import Routes from "./Routes";

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
              <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
