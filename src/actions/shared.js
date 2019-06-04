import { _getUsers, _getQuestions } from '../_DATA';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './auth';
import { LOADING_COMPLETE } from '../reducers/shared';

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
            .then(([users, questions]) => {
                dispatch(setAuthedUser('sarahedo'));
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(setLoadComplete(true));
            }).catch(error => console.log(error))
    }
}

export const setLoadComplete = (status) => {
    return {
        type: LOADING_COMPLETE,
        loaded: status,
    }
}