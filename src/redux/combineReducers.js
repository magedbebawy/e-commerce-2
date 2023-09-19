import { combineReducers } from 'redux';
import setUserReducer from './reducers/setUserReducer';
import signInReducer from './reducers/signInReducer';

const rootReducer = combineReducers({
    signedIn: signInReducer,
    userType: setUserReducer
});

export default rootReducer;