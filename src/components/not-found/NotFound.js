import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <h4 className="text-danger">
          Error <span>404</span>
        </h4>

        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    );
  }
}
