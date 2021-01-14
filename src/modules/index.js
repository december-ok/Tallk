import { combineReducers } from 'redux';
import user from './user';
import room from './room';
import setting from './setting';

const rootReducer = combineReducers({
	user,
	room,
	setting,
});

export default rootReducer;
