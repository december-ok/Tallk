import { getReadChat, getRealTimeChat } from './WebSocketController';

export const WebSocketRouter = (messageObject, ws) => {
	const { type, data } = messageObject;

	switch (type) {
		case 'getRealTimeChat':
			getRealTimeChat(data);
			break;
		case 'getReadChat':
			getReadChat(data);
			break;
		default:
			console.log('Error Wrong message:' + JSON.stringify(messageObject));
			break;
	}
};
