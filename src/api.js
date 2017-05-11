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
    return superagent
    .delete(`${API_HOST}/auth/sessions`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
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

  getMe = (token) => {
    return superagent
    .get(`${API_HOST}/auth/me`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
  }


}

export default new Api();
