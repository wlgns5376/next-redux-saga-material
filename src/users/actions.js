import {
    USERS_REQUESTING
} from './constants';

export function getUsers(page) {
    return {
        type: USERS_REQUESTING,
        payload: {
            page
        }
    }
}