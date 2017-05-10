import superagent from 'superagent'
import { API_HOST } from './config'

class Api {

  requestLogin = (email, password) => {
    return superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
    .set('Accept', 'application/json')
  }

  requestSignup = (email, password) => {
    return superagent
    .post(`${API_HOST}/auth/users`)
    // .send({ email, password })
      .send({ email, password })
      .set('Accept', 'application/json')
  }

  requestLogout = (token) => {
    console.log(token, "111111");
    return superagent
    .del(`${API_HOST}/auth/sessions`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
    .end(function (err, res) {
      console.log('err', err)
    })
  }

  getBoardsList = (page, count) => {
    return superagent
    .get(`${API_HOST}/boards`)
  }

  getBoard = (id) => {
    superagent
    .get(`${API_HOST}/boards/${id}`)

  }


  getBookmarks = (boardId) => {
    superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)

  }


}

export default new Api();
