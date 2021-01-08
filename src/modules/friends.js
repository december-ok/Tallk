const SET_FRIENDS = 'friends/SET_FRIENDS';
const UPDATE = 'friends/UPDATE';

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const update = (friends) => ({ type: UPDATE, friends });

const initialState = {
	loaded: false,
};

export default function friends(state = initialState, action) {
	switch (action.type) {
		case SET_FRIENDS:
			return {
				...state,
				loaded: true,
				user: action.user,
			};
		case UPDATE:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
}
