import { store } from '.';
import { getUser } from './apiController';
import { updateUser } from './modules/users';

export const getUserAsync = async (userId) => {
	const user = store.getState().users.get(userId);
	if (user) {
		return user;
	} else {
		const data = await getUser(userId);
		store.dispatch(updateUser(userId, data));
		return store.getState().users.get(userId);
	}
};
