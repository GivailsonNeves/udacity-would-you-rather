import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/site/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';
import middleware from './middleware';

const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Project todos:
 * 
 * Pages - routes
 * Login
 * Home
 * Question view
 * Question result
 * Question create
 * Leader Boarder
 * 
 * Componentes
 * 
 * Login: form login
 * Home: Tab [aswared, not answared], ListQuestions, Question Answared item, Question not aswered item
 * Question View: Question View form
 * Question result: Questions of the user, list of the questions, the question you selected answared, another questions from de user.
 * Question create: Questin create form
 * Leader Boarder, Liste container, First, Second and Third positions of rank.
 * 
 * Events:
 * 
 * LoginUser
 * LogoutUser
 * ListQuestions
 * Create Question
 * Answer Question
 * Get Leaders
 * Get User Questions
 */