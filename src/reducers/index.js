import { combineReducers } from 'redux';
import authedUser from './auth';
import questions from './questions';
import users from './users';
import loading from './shared';

export default combineReducers({
    authedUser,
    users,
    questions,
    loaded: loading
})