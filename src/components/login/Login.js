import React from "react";
import { Redirect } from "react-router-dom";
import * as Helper from "../../core/Helper";
import { connect } from "react-redux";
import { setAuthedUser } from "../../store/actions/authedUser.action";

let isMounted = false;

class Login extends React.Component {
  state = {
    users: [],
    selectedUserId: null,
    errorMsg: null
  };

  componentDidMount() {
    isMounted = false;

    if (!isMounted) {
      const usersArray = Helper.convertObjToArray(this.props.users);
      this.setState({ users: usersArray });
    } else {
      console.info("fetched but not updated to status, component is unmounted");
    }
  }

  componentWillUnmount() {
    isMounted = true; // resolve cause memory leak when user navigate to another screen while getusers is not completed.
  }

  login = () => {
    if (this.state.selectedUserId) {
      this.props.dispatch(setAuthedUser(this.state.selectedUserId));
    } else {
      // no user selected.
      this.setState({ errorMsg: "Please Select one user for login." });
    }
  };

  onUserSelected = event => {
    const userId = event.target.value;
    this.setState({
      selectedUserId: userId,
      errorMsg: null
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <p className="text-left text-muted">Select user to login:</p>
          <select
            className="form-control"
            name="usersSelection"
            onChange={this.onUserSelected}
          >
            <option value="">Select...</option>
            {this.props.users.length > 0 &&
              this.props.users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            }
          </select>

          <button
            onClick={this.login}
            type="button"
            className="btn btn-primary"
          >
            Login
          </button>

          {this.state.errorMsg && (
            <p className="text-danger">{this.state.errorMsg}</p>
          )}
        </div>

        {this.props.isLoggedIn && <Redirect to="/home" />}
      </div>
    );
    // end return
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Helper.convertObjToArray(users),
    isLoggedIn: authedUser != null
  };
}

export default connect(mapStateToProps)(Login);
