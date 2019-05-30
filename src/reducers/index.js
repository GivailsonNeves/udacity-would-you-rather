import { combineReducers } from 'redux';
import authedUser from './auth';
import questions from './questions';

export default combineReducers({
    authedUser,
    questions,
})