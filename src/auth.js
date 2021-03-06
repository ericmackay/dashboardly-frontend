import api from './api';

module.exports = {
  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return api.requestLogin(email, pass)
      .then(res => localStorage.token = res.body.token)
    }
  },

  signup(email, pass) {
    if(!email || !pass){
      throw new Error('Please enter valid email or password')
    }
    else {
      return api.requestSignup(email, pass);
    }
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => {
      delete localStorage.token
    })
    .catch(console.error);
  },

  isLoggedIn() {
    return !!localStorage.token
  },

}
