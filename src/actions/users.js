export const RECEIVE_USERS = 'RECEIVE_USERS';

export function listUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}