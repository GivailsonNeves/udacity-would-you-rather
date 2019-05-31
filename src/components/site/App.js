import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'
import Header from './header';
import { handleInitialData } from '../../actions/shared';
import QuestionListPage from '../../pages/QuestionListPage';

class App extends Component {

  componentDidMount() {
    console.log('init data')
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <Route path='/' exact component={QuestionListPage} />
          </div>
        </Fragment>
      </Router>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
