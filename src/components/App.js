import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import './App.css';
import auth from '../auth';
import util from '../util';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      title: 'Dashboardly'
    }
  }

  closeMenu = () => this.setState({ isMenuOpen: false })
  closeMenuAndLogout = () =>
  {
    this.closeMenu()
    this._handleLogout()
  }
  _handleLogout = () => {
    auth.logout()
    // .then(res => this.props..push('/'));
  }
  componentDidUpdate(){
    let newTitle = util.getTitle()
    if (newTitle != this.state.title){
      this.setState({title: newTitle})
    }
  }

  render() {
    let {isMenuOpen} = this.state
    return (
      <div className="App">
        <div className="App-navbar">
          <i className="fa fa-bars fa-2x menu-icon"
            onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
          />
          <Link to="/" className="App-navbar__title">{this.state.title}</Link>
          <i className="fa fa-cog fa-2x settings-icon"/>
        </div>

        <Menu show={isMenuOpen} closeMenu={this.closeMenu} closeMenuAndLogout={this.closeMenuAndLogout}/>

        {this.props.children}

      </div>
    );
  }
}

export default App;
