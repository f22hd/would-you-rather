import React from "react";
import LeaderBoardItem from "./LeaderBoardItem";
import { connect } from "react-redux";

class LeaderBoard extends React.Component {
  componentDidMount() {}

  render() {
    // list items
    const { users } = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Rank</td>
            <td>Avatar</td>
            <td>Username</td>
            <td>No Of Questions Asked</td>
            <td>No Of Questions Answered</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).length > 0 ? (
            Object.keys(users).map((userKey, index) => (
              <LeaderBoardItem
                key={index}
                user={users[userKey]}
                index={index}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <h4 className="text-center mt-4 text-danger"> No Users </h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

function mapToState({ users }) {
  return {
    users
  };
}
export default connect(mapToState)(LeaderBoard);
