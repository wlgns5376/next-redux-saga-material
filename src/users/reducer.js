import {
    USERS_REQUESTING,
    USERS_SUCCESS
} from './constants';

const initialState = {
    users: [],
};

const loginReducer = (state = initialState, action) => {
    switch( action.type ){
        case USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export default loginReducer