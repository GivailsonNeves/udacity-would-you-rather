import { _getUsers, _getQuestions } from '../_DATA';

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getUsers, _getQuestions])
            .then(([users, questions]) => {

            }).catch(error => console.log(error))
    }
}