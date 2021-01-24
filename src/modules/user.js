const SET_USER = 'user/SET_USER';
const UPDATE = 'user/UPDATE';
const BLOCK = 'user/BLOCK';

export const setUser = (user) => ({ type: SET_USER, user });
export const update = (user) => ({ type: UPDATE, user });
export const block = () => ({ type: BLOCK });

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
		default:
			return state;
	}
}
