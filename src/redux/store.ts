import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {userLoginReducer, userProfileReducer} from './reducers/userReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
