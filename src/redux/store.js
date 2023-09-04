import { createStore } from 'redux';
import signInReducer from './reducers/signInReducer';

const store = createStore (
    signInReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // Enables Redux devtools
)

export default store;