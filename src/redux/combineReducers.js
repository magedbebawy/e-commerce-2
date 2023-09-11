import { combineReducers } from 'redux';
import signInReducer from './reducers/signInReducer';

const rootReducer = combineReducers({
    signedIn: signInReducer
});

export default rootReducer;