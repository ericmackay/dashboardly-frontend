import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateBoookmark from '../modals/CreateBookmark';
// import auth from '../../auth';
import './Board.css';
import App from '../App';
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
      // console.log(this.props, "props!!!!")
      Promise.all([
        api.getBoard(this.props.params.id),
        api.getBookmarks(this.props.params.id)
      ])
      .then((res) => {
        // console.log(res, "Hello~~~!!!!");
        App.changeTitle(res[0].body.title);
        this.setState({
          title: res[0].body.title,
          description: res[0].body.description,
          bookmarks: res[1].body
        })
      })
      .catch(console.error)
  }

  _handleBookmarkCreate = () => {
    this.setState({ isCreateBookmarkClicked: !this.state.isCreateBookmarkClicked })
  }

  render() {
    let { bookmarks } = this.state
    console.log(bookmarks, "bookmarks")
    return (
      <div className="board">
        { bookmarks.map(b => {

          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
          />
        })}
        {auth.isLoggedIn() ? <AddButton _handleButton={this._handleBookmarkCreate}/> : null}
        {this.state.isCreateBookmarkClicked ? <CreateBoookmark _handleBookmarkCreate={this._handleBookmarkCreate} fetchBoardData={this.fetchBoardData}/> : null}
      </div>
    );
  }

}
