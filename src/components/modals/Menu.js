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
          {isLoggedIn ?
            <img src={this.state.profile.avatarUrl} alt="profile-pic" className="menu__avatar"/>
            : null}
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
            <Link to ="/" className="menu__item" onClick={closeMenuAndLogout}>
              Logout
            </Link>
          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
