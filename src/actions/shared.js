import { _getUsers, _getQuestions } from '../_DATA';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './auth';

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
            .then(([users, questions]) => {
                dispatch(setAuthedUser('sarahedo'));
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
            }).catch(error => console.log(error))
    }
}