import {ANSWER_QUESTION, CREATE_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions';

const questions = (state = {}, action) => {
    switch(action.type) {

        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state;
    }
} 

export default questions;