import { combineReducers } from 'redux';
import user from './user';
import room from './room';
import setting from './setting';
import users from './users';

const rootReducer = combineReducers({
	user,
	room,
	setting,
	users,
});

export default rootReducer;
