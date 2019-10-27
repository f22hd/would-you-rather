import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { removeAuthedUser } from "../../store/actions/authedUser.action";

class Logout extends React.Component {
  componentDidMount() {
    this.props.dispatch(removeAuthedUser());
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h4 className="text-center">Logging out...</h4>
        </div>

        {this.props.isLoggedout && <Redirect to="/login" />}
      </div>
    );
    // end return
  }
}

function mapToState({ authedUser }) {
  return {
    isLoggedout: authedUser == null
  };
}
export default connect(mapToState)(Logout);
