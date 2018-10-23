import {call, put, takeLatest} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {
    USERS_REQUESTING,
    USERS_SUCCESS,
    USERS_ERROR
} from './constants';

const API_URL = {
    users: 'https://reqres.in/api/users'
}

function fetchUsers(page) {
    return fetch(API_URL.users+'?page='+page)
        .then(response => response.json())
        .catch((error) => { throw error })
}

function * requestUsers(action){
    try{
        const { page } = action.payload;
        const { data } = yield call(fetchUsers, page);

        yield put({
            type: USERS_SUCCESS,
            users: data
        });
    }
    catch( error ){
        console.error(error);

        yield put({
            type: USERS_ERROR,
            error
        })
    }
}

export default function * usersWatcher(){
    yield takeLatest(USERS_REQUESTING, requestUsers);
}