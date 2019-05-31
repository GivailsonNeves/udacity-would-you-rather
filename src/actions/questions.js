import {_saveQuestionAnswer, _saveQuestion} from '../_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

const answerQuestion = ({ users, questions }) => {
    return {
        type: ANSWER_QUESTION,
        users,
        questions,
    }
}

export const handleAnswerQuestion = ({id, answer}) => {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        return _saveQuestionAnswer({authedUser, id, answer})
            .then(result => dispatch(answerQuestion(result)))
    }
}

export const createQuestion = (question) => {
    return {
        type: CREATE_QUESTION,
        question,
    }
}

export const handleCreateQuestion = ({ optionOneText, optionTwoText}) =>
{
    return (dispatch, getState) => {
        const {authedUser} = getState();

        return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
            .then(question => dispatch(createQuestion(question)));
    }
}