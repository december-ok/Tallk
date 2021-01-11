export const WebSocketRouter = (messageObject, ws) => {
	const { type, data } = messageObject;

	switch (type) {
		case 'getRoomChat':
			const { roomId, chatList, isEnd } = data;

			break;
		default:
			console.log('Error Wrong message:' + JSON.stringify(messageObject));
			break;
	}
};
