import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-danger">
          Error <code>404</code>
        </h1>

        <Link to="/login" className="btn btn-primary btn-log mt-3">
          Login
        </Link>
      </div>
    );
  }
}
