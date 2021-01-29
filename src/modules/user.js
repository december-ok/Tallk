import { act } from 'react-dom/test-utils';

const SET_USER = 'user/SET_USER';
const UPDATE = 'user/UPDATE';
const BLOCK = 'user/BLOCK';
const USER_RESET = 'user/RESET';
const SET_ID = 'user/SET_ID';

export const setUser = (user) => ({ type: SET_USER, user });
export const update = (user) => ({ type: UPDATE, user });
export const block = () => ({ type: BLOCK });
export const userReset = () => ({ type: USER_RESET });
export const setId = (userId) => ({ type: SET_ID, userId });

const initialState = {
	loaded: false,
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				...action.user,
				block: false,
			};
		case UPDATE:
			return {
				...state,
				...action.user,
				block: false,
			};
		case BLOCK:
			return {
				...state,
				block: true,
			};
		case USER_RESET:
			return {};
		case SET_ID:
			return {
				_id: action.userId,
			};
		default:
			return state;
	}
}
