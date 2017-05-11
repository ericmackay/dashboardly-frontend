import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import api from '../../api';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {}};
  }

  handleClickOutside = () => {
    this.props.closeMenu();
  }
  _handleLogout = () => {
    auth.logout()
    // .then(res => this.props..push('/'));
  }
  componentDidMount = () => {
    let isLoggedIn = auth.isLoggedIn()
    let profile = {}
    if(isLoggedIn){
      api.getMe(localStorage.token)
<<<<<<< HEAD
<<<<<<< HEAD
      .then(res => profile = res);
=======
      .then((res) => {profile = res;console.dir(profile);})
>>>>>>> 91e776ea2111a8727dd7c74991571faf522a6701

    // console.log("hello", profile);


=======
      .then((res) => {
        this.setState({
          profile: res
        })})
>>>>>>> a7c69c35c689819b3bd5a6da1312fdbc2dbbfc18
    }

  }
  render() {
    let { closeMenu, show } = this.props
    let isLoggedIn = auth.isLoggedIn()

    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">
          <img src={this.state.profile.avatarUrl} alt="profile-pic" className="menu__avatar"/>
        </div>

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item" onClick={closeMenu}>
              Login
            </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              Signup
            </Link>
          : null}

          {isLoggedIn ?
            <button className="menu__item" onClick={this._handleLogout}>
              Logout
            </button>
          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
