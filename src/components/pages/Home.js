import React, {Component} from 'react';
import api from '../../api';
import BoardCard from '../elements/BoardCard';
import AddButton from '../elements/AddButton';
import AddButton2 from '../elements/AddButton2';
import auth from '../../auth';
import './Home.css';
import CreateBoard from '../modals/CreateBoard';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      isCreateBoardClicked: false
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.boards.length)
  //   console.log(this.state.boards.length);
  //   if (prevState.boards.length != this.state.boards.length){
  //       this._fetchBoards();
  //   }
  //
  // }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body })
    })
    .catch(console.error)
  }
  _handleBoardCreate = () => {
      this.setState({ isCreateBoardClicked: !this.state.isCreateBoardClicked  })
  }

  render() {
    let { boards } = this.state
    return (
      <div className="home">

          { boards.map(b =>
            <div className="home__boards-thirds">
            <BoardCard
              key={b.id}
              id={b.id}
              title={b.title}
              description={b.description}
              updatedAt={b.updatedAt}
            />
            </div>
          )}
          {auth.isLoggedIn() ? <AddButton2 _handleBoardCreate={this._handleBoardCreate}/> : null}
          {this.state.isCreateBoardClicked ? <CreateBoard _handleBoardCreate={this._handleBoardCreate} _fetchBoards={this._fetchBoards}/> : null }

      </div>
    ); //For logged in users on the
    //home page, make the + button work. It should open a
    //modal prompting the user to create a new board like
    // in the mockups. On submit, make the appropriate API
    //call. Once the board is created, redirect the user to
    //that board's page with React Router's browserHistory.
  }

}
