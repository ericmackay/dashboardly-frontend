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
    return superagent
    .get(`${API_HOST}/boards/${id}`)

  }

  getBookmarks = (boardId) => {
    return superagent
    .get(`${API_HOST}/boards/${boardId}/bookmarks`)

  }

  getMe = (token) => {
    return superagent
    .get(`${API_HOST}/auth/me`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
    .then(profile => {
      return JSON.parse(profile.text);
    })
  }

  postBoard = (board) => {
    return this.getMe(localStorage.token)
    .then((profile) => {
      return superagent
      .post(`${API_HOST}/boards`)
      .send({
        title: board.title,
        description: board.description,
        ownerId: profile.userId
      })
      .set('Authorization', `token ${localStorage.token}`)
      .set('Accept', 'application/json')
    })

  }

  deleteBoard = (id) => {
    return superagent
    .delete(`${API_HOST}/boards/${id}`)
  }

  // getBookmarksList = (page, count) => {
  //   return superagent
  //   .get(`${API_HOST}/boards/${this.boardId}/bookmarks`)
  // }

  postBookmark = (bookmark) => {
    return this.getBoard(bookmark.boardId)
    .then(() => {
      return superagent
      .post(`${API_HOST}/boards/${bookmark.boardId}/bookmarks`)
      .send({
        title: bookmark.title,
        description: bookmark.description,
        url: bookmark.url
      })
      .set('Authorization', `token ${localStorage.token}`)
      .set('Accept', 'application/json')
    })
  }
}

export default new Api();
