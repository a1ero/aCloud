import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import fileReducer from './fileReducer';
import userReducer from './userReducer';

const rootReduce = combineReducers({
    user: userReducer,
    files: fileReducer,
})

export const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)))