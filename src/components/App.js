import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import './App.css';
import auth from '../auth';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpen: false }
  }

  closeMenu = () => this.setState({ isMenuOpen: false,
  isBoardOpen: false })
  closeMenuAndLogout = () =>
  {
    this.closeMenu()
    this._handleLogout()
  }
  _handleLogout = () => {
    auth.logout()
    // .then(res => this.props..push('/'));
  }



  render() {
    let {isMenuOpen} = this.state
    return (
      <div className="App">
        <div className="App-navbar">
          <i className="fa fa-bars fa-2x menu-icon"
            onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
          />
          {this.state.isBoardOpen ? <Link to="/" className="App-navbar__title">Dashboardly</Link> : <Link to="/" className="App-navbar__title">Dashboardly</Link>}
          <i className="fa fa-cog fa-2x settings-icon"/>
        </div>

        <Menu show={isMenuOpen} closeMenu={this.closeMenu} closeMenuAndLogout={this.closeMenuAndLogout}/>

        {this.props.children}

      </div>
    );
  }
}

export function changeTitle (title) {
  console.log("hello", title)
}

export default App;
