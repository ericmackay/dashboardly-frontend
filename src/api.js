import superagent from 'superagent'
import { API_HOST } from './config'
import { APT_HOST2} from './config'

class Api {

  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST2}/auth/sessions`)
    .send({ email, password })
  )

  requestSignup = (email, password) => {
    return superagent
    .post(`${API_HOST}/auth/users`)
    // .send({ email, password })
      .send({ email, password })
      .set('Accept', 'application/json')
  }

  requestLogout = (token) => (
    superagent
    .delete(`${API_HOST2}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  getBoardsList = (page, count) => (
    superagent
    .get(`${API_HOST2}/boards`)
  )

  getBoard = (id) => (
    superagent
    .get(`${API_HOST2}/boards/${id}`)
  )

  getBookmarks = (boardId) => (
    superagent
    .get(`${API_HOST2}/boards/${boardId}/bookmarks`)
  )

}

export default new Api();
