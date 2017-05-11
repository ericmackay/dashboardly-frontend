import React, {Component} from 'react';
import './CreateBoard.css';
import api from '../../api';
// import Home from '../pages/Home';

const ENTER = 13;

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _submitBoard = () => {
    let{title: {value: title}, description: {value: description}} = this.refs;
    if(title){
      api.postBoard({title: title, description: description})
      .then( () => {
        this.props._handleBoardCreate();
        this.props._fetchBoards();
      })
      .catch(console.error)
    }

  }

  _handleTyping = (e) => {
    if(this.state && this.state.error){
      this.setState({error: null})
    }
    if(e.keyCode === ENTER){
      this._submitBoard()
    }
  }

  render() {
    return (
      <div className="create__board">
        <div className="create__board-content">
          <h1>Create Board</h1>
          <h5>Title</h5>
          <input type="text" ref="title" onKeyUp={this._handleTyping}/><br/>
          <h5>Description</h5>
          <input type="text" ref="description" onKeyUp={this._handleTyping}/><br/>
        <div className="create__board-button">
          <button onClick={this._submitBoard}>Create Board</button>
        </div>
        </div>
      </div>
    );
  }

}
