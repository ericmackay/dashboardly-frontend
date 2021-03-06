import React, {Component} from 'react';
import auth from '../../auth';
import './SignUp.css';

const ENTER = 13;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSignup = () => {
    let{email: {value: email}, password: {value: password}} = this.refs;
    //console.log(email, password, 'test!!!!');
    if(email && password){
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
      <div className="sign__up">
        <div className="sign__up-content">
          <h1>Sign Up</h1>
          <h5>Email</h5>
          <input type="text" ref="email" onKeyUp={this._handleTyping}/><br/>
          <h5>Password</h5>
          <input type="password" ref="password" onKeyUp={this._handleTyping}/><br/>
        <div className="sign__up-button">
          <button onClick={this._handleSignup}>Sign Up</button>
        </div>
        </div>
      </div>
    );
  }

}
