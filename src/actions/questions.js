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

const answerQuestion = ({ qid, answer }) => {
    return {
        type: ANSWER_QUESTION,
        qid,
        answer,
    }
}

export const handleAnswerQuestion = ({qid, answer}) => {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        console.log(authedUser)

        return _saveQuestionAnswer({authedUser, qid, answer})
            .then(() => dispatch(answerQuestion({qid, answer})))
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