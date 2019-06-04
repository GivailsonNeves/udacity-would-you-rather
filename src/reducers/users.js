import { RECEIVE_USERS } from "../actions/users";
import { CREATE_QUESTION, ANSWER_QUESTION } from "../actions/questions";


const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case CREATE_QUESTION:
            const {question} = action;
            
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat(question.id)
                }
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state;
    }
}

export default users;