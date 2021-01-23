import { store } from '.';
import { updateUser } from './modules/users';

export const getUserAsync = async (userId) => {
	const user = store.getStore().users.get(userId);
	if (user) {
		return user;
	} else {
		const data = getUser(userId);
		store.dispatch(updateUser(userId, data));
	}
};
