import { combineReducers } from 'redux';
import user from './user';
import friends from './friends';
import setting from './setting';

const rootReducer = combineReducers({
	user,
	friends,
	setting,
});

export default rootReducer;
