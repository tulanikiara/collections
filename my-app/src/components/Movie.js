import React, {Component} from 'react';
import '../css/Movie.css';

class Note extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="movie-title">Movie Title</h5>
            <p className="description">This is what the movie is about</p>
            <p className="year">Year</p>
            <p className="genre"></p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;