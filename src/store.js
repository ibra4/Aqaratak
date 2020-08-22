import {combineReducers, createStore} from 'redux';
import UserReducer from './reducers/UserReducer';
import AppReducer from './reducers/AppReducer';

const reducers = combineReducers({
  user: UserReducer,
  app: AppReducer,
});

export const store = createStore(reducers);
