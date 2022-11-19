import {combineReducers} from 'redux';
import { userReducer} from './userReducer';
//@todo  combine reducers
export const rootReducer=combineReducers({user:userReducer});
