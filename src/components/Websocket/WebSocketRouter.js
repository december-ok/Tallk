import {
	getNewRoom,
	getReadChat,
	getRealTimeChat,
} from './WebSocketController';

export const WebSocketRouter = (messageObject) => {
	console.log(messageObject);
	const { type, data } = messageObject;

	switch (type) {
		case 'getRealTimeChat':
			getRealTimeChat(data);
			break;
		case 'getReadChat':
			getReadChat(data);
			break;
		case 'getNewRoom':
			getNewRoom(data);
			break;
		case 'doReload':
			break;
		default:
			console.log('Error Wrong message:' + JSON.stringify(messageObject));
			break;
	}
};
