import React from "react";
import "./MovieList.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="card-header">
          <h1>Movie List Application</h1>
        </div>
      </div>
    );
  }
}
