import React, {Component} from 'react';
import './CreateBoard.css';

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleCreate = () => {
    let{title: {value: title, title: {value: description}} = this.refs;
    if(title && description){
      auth.signup(email, password)
      .then(res => this.props.router.push('/login'))
      .catch(console.error)
    }
  }

  _handleTyping = (e) => {
    if(this.state && this.state.error){
      this.setState({error: null})
    }
    if(e.keyCode === ENTER){
      this._handleSignup()
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
        <div className="sign__up-button">
          <button onClick={this._handleSignup}>Create Board</button>
        </div>
        </div>
      </div>
    );
  }

}
