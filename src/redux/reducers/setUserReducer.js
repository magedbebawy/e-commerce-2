import { USER, ADMIN } from "../actions/setUserActions";

const setUserReducer = (state = 'user', action) => {
    switch(action.type) {
        case USER:
            return 'user';
        case ADMIN:
            return 'admin';
        default:
            return state;
    }
}

export default setUserReducer;