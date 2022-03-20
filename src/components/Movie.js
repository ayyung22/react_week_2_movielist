import React from "react";
import StarRating from "./StarRating";
import Review from "./Review";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      release: props.release,
      poster: props.poster,
      summary: props.summary,
    };
  }

  render() {
    return (
      <div className="row">
        <div className="card w-75">
          <div className="card-header bg-dark text-white">
            <h3>
              <b>Title</b>
            </h3>
            {this.state.title}
          </div>
          <br />
          <div className="card-header release">
            <h3>
              <b>Release Date</b>
            </h3>
            {this.state.release}
          </div>
          <br />
          <div className="card-header bg-light">
            <img src={this.state.poster} width="300" />
          </div>
          <br />
          <div className="card-body">
            <h3>
              <b>Summary</b>
            </h3>
            {this.state.summary}
            <br />
            <br />
            <h3>
              <b>Star Ratings</b>
            </h3>
            <StarRating />
          </div>
          <br />
          <div className="card-footer">
            <h3>
              <b>Leave a Review Here</b>
            </h3>
            <ReviewList />
          </div>
        </div>
      </div>
    );
  }
}
