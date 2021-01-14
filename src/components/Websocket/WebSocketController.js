import { store } from '../..';
import room, { addRealChat } from '../../modules/room';

export const getRealTimeChat = (data) => {
	const { roomId, chat } = data;
	console.log(data);
	store.dispatch(addRealChat(roomId, chat));
	console.log(store.getState());
};

export const getReadChat = (data) => {
	const { chatId, userId, roomId } = data;
};
