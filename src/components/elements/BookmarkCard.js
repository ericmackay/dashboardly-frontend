import React, {Component} from 'react';
import './BookmarkCard.css';
import api from '../../api';

const ENTER = 13;

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _submitBookmark = () => {
    let{title: {value: title}, description: {value: description}} = this.refs;
    if(title){
      api.postBookmark({title: title, description: description})
      .then( () => {
        this.props._handleBookmarkCreate();
        this.props.fetchBoardData();
      })
      .catch(console.error)
    }
  }

  _handleTyping = (e) => {
    if(this.state && this.state.error){
      this.setState({error: null})
    }
    if(e.keyCode === ENTER){
      this._submitBookmark()
    }
  }

  render() {
    return (
      <div className="bookmark">
        <div className="bookmark-content">
          <h1>Create Bookmark</h1>
          <h5>Title</h5>
          <input type="text" ref="title" onKeyUp={this._handleTyping}/><br/>
          <h5>Description</h5>
          <input type="text" ref="description" onKeyUp={this._handleTyping}/><br/>
        <div className="bookmark-button">
          <button onClick={this._submitBookmark}>Create Bookmark</button>
        </div>
        </div>
      </div>
    );
  }

}
