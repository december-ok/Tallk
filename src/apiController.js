import axios from 'axios';
import { base_uri } from '.';

export const getInitialData = async (userId) => {
	const message = `${base_uri}/api/getUser?id=`;
	const { data } = await axios.get(message + userId);
	return data;
};

export const postCreateChatRoom = async ({ creator, roomName, userList }) => {
	const message = `${base_uri}/room/createRoom`;
	const { data } = await axios.post(message, {
		creator,
		roomName,
		userList,
	});
	return data;
};

export const getChatRoom = async ({ roomId, from, amount }) => {
	const message = `${base_uri}/room/getRoomChat?roomId=${roomId}&from=${from}&amount=${amount}`;
	const { data } = await axios.get(message);
	return data;
};

export const getRoom = async ({ roomId }) => {
	const message = `${base_uri}/room/getRoom?roomId=${roomId}`;
	const { data } = await axios.get(message);
	return data;
};
