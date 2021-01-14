import { store } from '../..';
import { WebSocketRouter } from './WebSocketRouter';

export const Websocket = (() => {
	let ws;
	return {
		open: (userId) => {
			try {
				ws = new WebSocket('ws://localhost:4001');

				ws.onopen = () => {
					console.log('Connected!!');
					ws.send(
						JSON.stringify({
							type: 'authenticate',
							data: {
								authKey: 'sdf',
								userId: userId,
							},
						})
					);
				};

				ws.onmessage = async (message) => {
					const text = await new Response(message.data).text();
					const data = JSON.parse(text);

					WebSocketRouter(data);
				};
			} catch (error) {
				console.log(error);
			}
		},
		send: (messageObject) => {
			try {
				ws.send(JSON.stringify(messageObject));
			} catch (error) {
				console.log(error);
			}
		},
		close: () => {
			if (ws) {
				ws.close();
				console.log('closed');
			}
		},
	};
})();
