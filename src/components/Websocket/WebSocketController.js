import { base_uri, store } from '../..';
import room, { addRealChat, addRoom, initRoom } from '../../modules/room';

export const getRealTimeChat = (data) => {
	const { roomId, chat } = data;
	store.dispatch(addRealChat(roomId, chat));
};

export const getReadChat = (data) => {
	const { chatId, userId, roomId } = data;
};

export const getNewRoom = (data) => {
	const { room } = data;
	store.dispatch(addRoom(room));
	console.log(store.getState());
};

export const changeRoomPeople = (data) => {
	const { roomId, userId, isOut } = data;
	store.dispatch(changeRoomPeople(roomId, userId, isOut));
};

export const doReload = async () => {
	window.location.reload();
};
