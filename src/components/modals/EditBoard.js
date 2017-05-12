import React, {Component} from 'react';
import './EditBoard.css';
import api from '../../api';
// import Home from '../pages/Home';

const ENTER = 13;

export default class EditBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _submitBoardUpdate = () => {
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
      <div className="edit__board">
        <div className="edit__board-content">
          <h1>Edit Board</h1>
          <h5>Title</h5>
          <input type="text" ref="title" onKeyUp={this._handleTyping}/><br/>
          <h5>Description</h5>
          <input type="text" ref="description" onKeyUp={this._handleTyping}/><br/>
        <div className="edit__board-button">
          <button onClick=<EditBoard/>Submit Changes</button>
        </div>
        </div>
      </div>
    );
  }

}
