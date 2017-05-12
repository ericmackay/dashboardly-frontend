import React, {Component} from 'react';
import { Link } from 'react-router';
import { Redirect } from 'react-router';
import './BoardCard.css';

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, id } = this.props
    return (
      <Link to={`/boards/${id}`}>
        <div className="board-card">
          <div className="board-container">
            <div className="board-item">
              <h2>{ title }</h2>
              <p>{ description }</p>
            </div>
            <div className="board-item2">
            </div>
            <div className="board-edit">
              <button onClick="/EditBoard">Edit</button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

}
