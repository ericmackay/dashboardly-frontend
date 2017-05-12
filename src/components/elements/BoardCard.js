import React, {Component} from 'react';
import { Link } from 'react-router';
// import { Redirect } from 'react-router';
import './BoardCard.css';
import auth from '../../auth';
import api from '../../api'

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleDelete = () => {
    console.log("helo")
    return api.deleteBoard(this.props.id)
  }
  render() {
    const isLoggedIn = auth.isLoggedIn();
    let { title, description, id } = this.props
    if(isLoggedIn){
      return (
        <div>
          <Link to={`/boards/${id}`}>
            <div className="board-card">
              <div className="board-container">
                <div className="board-item">
                  <h2>{ title }</h2>
                  <p>{ description }</p>
                </div>
                <div className="board-item2">
                </div>

              </div>
            </div>
          </Link>
          <div className="board-edit">
            <button onClick={this._handleSignup}>Edit</button>
            <button type="button" onClick={this._handleDelete}>Delete</button>
          </div>
        </div>
    );
  } else {
    return(
      <Link to={`/boards/${id}`}>
        <div className="board-card">
          <div className="board-container">
            <div className="board-item">
              <h2>{ title }</h2>
              <p>{ description }</p>
            </div>
            <div className="board-item2">
            </div>
          </div>
        </div>
      </Link>
    );
  }
  }

}
