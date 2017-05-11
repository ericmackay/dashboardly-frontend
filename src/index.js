import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Board from './components/pages/Board';
// import CreateBoard from './components/modals/CreateBoard';

import './index.css';


const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/boards/:id" component={Board}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        {/* <Route path="/createboard" component={CreateBoard}/> */}
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
