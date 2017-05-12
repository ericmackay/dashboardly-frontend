import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateBookmark from '../modals/CreateBookmark';
// import auth from '../../auth';
import './Board.css';
import util from '../../util';
const changeTitle = require('../App').changeTitle;

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: "",
      isCreateBookmarkClicked: false
    };
  }

  componentDidMount() {
    this.fetchBoardData()

    //
  }

  fetchBoardData = () => {

      Promise.all([
        api.getBoard(this.props.params.id),
        api.getBookmarks(this.props.params.id)
      ])
      .then((res) => {

        util.changeTitle(res[0].body[0].title);
        this.setState({
          title: res[0].body.title,
          description: res[0].body.description,
          bookmarks: res[1].body
        })
      })
      .catch(console.error)
  }

  boardId = () => {
    return this.props.params.id;
  }

  _handleBookmarkCreate = () => {
    this.setState({ isCreateBookmarkClicked: !this.state.isCreateBookmarkClicked })
  }



  render() {
    let { bookmarks } = this.state

    return (
      <div className="board">
        { bookmarks.map(b => {
          return (<div className="home__boards-thirds">
            <BookmarkCard
              key={b.id}
              id={b.id}
              title={b.title}
              description={b.description}
              url={b.url}
            />
        </div>);
        })}
        {auth.isLoggedIn() ? <AddButton _handleButton={this._handleBookmarkCreate}/> : null}
        {this.state.isCreateBookmarkClicked ?
          <CreateBookmark _handleBookmarkCreate={this._handleBookmarkCreate} fetchBoardData={this.fetchBoardData} boardId={this.boardId}/>
          : null}
      </div>
    );
  }

}
