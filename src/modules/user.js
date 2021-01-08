const SET_USER = 'user/SET_USER';
const UPDATE = 'user/UPDATE';

export const setUser = (user) => ({ type: SET_USER, user });
export const update = (user) => ({ type: UPDATE, user });

const initialState = {
	loaded: false,
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				...action.user,
				loaded: true,
			};
		case UPDATE:
			return {
				...state,
				...action.user,
			};
		default:
			return state;
	}
}
