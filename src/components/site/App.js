import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'
import Header from './header';
import { handleInitialData } from '../../actions/shared';
import QuestionListPage from '../../pages/QuestionListPage';
import QuestionCreateFormPage from '../../pages/QuestionCreateFormPage';
import LoginForm from '../../pages/LoginForm';

class App extends Component {

  componentDidMount() {    
    this.props.dispatch(handleInitialData());
  }

  render() {

    const {authedUser} = this.props;

    return (
      <Router>
        <Fragment>
          <Header />
          <h2>--{authedUser}--</h2>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <Route path='/' exact component={QuestionListPage} />
            <Route path='/new-question' exact component={QuestionCreateFormPage} />
            <Route path='/login' exact component={LoginForm} />
          </div>
        </Fragment>
      </Router>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
