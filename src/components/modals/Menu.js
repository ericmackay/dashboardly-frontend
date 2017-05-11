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
  // _handleLogout = () => {
  //   auth.logout()
  //   // .then(res => this.props..push('/'));
  // }
  componentDidMount = () => {
    let isLoggedIn = auth.isLoggedIn()
    if(isLoggedIn){
      api.getMe(localStorage.token)
      .then((res) => {
        this.setState({
          profile: res
        })})
    }

  }
  render() {
    let { closeMenu, show, closeMenuAndLogout} = this.props
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
            <button className="menu__item" onClick={closeMenuAndLogout}>
              Logout
            </button>
          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
