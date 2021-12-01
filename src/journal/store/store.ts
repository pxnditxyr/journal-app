import { combineReducers, compose, createStore } from 'redux';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer,
});

const composeEnhancers = ( window as  any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers()
);

