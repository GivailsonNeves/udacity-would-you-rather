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

class App extends Component {

  componentDidMount() {    
    this.props.dispatch(handleInitialData());
  }

  render() {

    const {loading, users, authedUser} = this.props;

    return (
      !loading ?
      <Router>
        <Fragment>
          <Header user={users[authedUser]} />
          <div className="container">
            <Route path='/' exact component={QuestionList} />
            <Route path='/new-question' exact component={QuestionCreateForm} />
            <Route path='/login' exact component={LoginForm} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            <Route path='/question/:id' exact component={QuestionAnswer} />
          </div>
        </Fragment>
      </Router>
      :
      <p>carregando...</p>
    );
  }

}

const mapStateToProps = ({ authedUser, users }) => (
  {
    users,
    authedUser,
    loading: authedUser === null
  }
);

export default connect(mapStateToProps)(App)
