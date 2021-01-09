export const Websocket = (() => {
	let ws;
	return {
		open: () => {
			try {
				ws = new WebSocket('ws://localhost:4001');

				ws.onopen = () => {
					console.log('Connected!!');
				};

				ws.onmessage = async (message) => {
					const text = await new Response(message.data).text();
					const data = JSON.parse(text);

					console.log(data);
				};
			} catch (error) {
				console.log(error);
			}
		},
		close: () => {
			if (ws) ws.close();
		},
	};
})();
