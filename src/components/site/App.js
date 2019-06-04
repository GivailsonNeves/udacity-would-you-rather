import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'
import Header from './header';
import { handleInitialData } from '../../actions/shared';
import QuestionList from '../../pages/QuestionList';
import QuestionCreateForm from '../../pages/QuestionCreateForm';
import LoginForm from '../../pages/LoginForm';
import QuestionAnswer from '../../pages/QuestionAnswer';
import LeaderBoard from '../../pages/LeaderBoard';
import { setAuthedUser } from '../../actions/auth';

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.dispatch(setAuthedUser(null));
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    const { logged, loaded, users, authedUser } = this.props;

    return (
      <div className="container">
        {
          loaded ?
            (logged ?
              <Router>
                <Fragment>
                  <Header user={users[authedUser]} logOut={this.logOut} />
                  <div className="container">
                    <Route path='/' exact component={QuestionList} />
                    <Route path='/add' exact component={QuestionCreateForm} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route path='/question/:id' exact component={QuestionAnswer} />
                  </div>
                </Fragment>
              </Router>
              :
              <LoginForm />)
          : <div className="text-center"><p>Loading...</p></div>
        }
      </div>
    );
  }

}

const mapStateToProps = ({ authedUser, users, loaded }) => (
  {
    users,
    authedUser,
    loaded,
    logged: authedUser !== null
  }
);

export default connect(mapStateToProps)(App)
