import React, {Component} from 'react';
import '../css/Collection.css';
import Note from './Movie';

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-collection">
          <div className="row">
            <Movie />
            <Movie />
            <Movie />
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Collection;