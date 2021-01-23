const INIT_USERS = 'users/INIT_USERS';
const UPDATE_USER = 'users/UPDATE_USER';

export const initUsers = (data) => ({
	type: INIT_USERS,
	data,
});
export const updateUser = (userId, userObj) => ({
	type: UPDATE_USER,
	data: { userId, userObj },
});

const initialState = new Map();

export default function users(state = initialState, action) {
	const newMap = new Map();
	state.forEach((value, key) => {
		newMap.set(String(key), value);
	});
	let obj;
	switch (action.type) {
		case INIT_USERS:
			const { friendsList } = action.data;
			friendsList.forEach((item) => newMap.set(String(item._id), item));
			return newMap;
		case UPDATE_USER:
			const { userId, userObj } = action.data;
			newMap.set(String(userId), userObj);
			// console.log(newMap);
			return newMap;
		default:
			return state;
	}
}
