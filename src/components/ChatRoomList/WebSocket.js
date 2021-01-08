import { useEffect } from 'react';

function WebSocketExample() {
	let ws;

	useEffect(() => {
		try {
			ws = new WebSocket('ws://localhost:3002');
			ws.onopen = (event) => {
				console.log(event);
			};
			ws.onmessage = (event) => {
				console.log(event.data);
			};
			ws.onopen = () => {
				ws.send('hihi');
			};
		} catch (error) {
			console.log(error);
		}
	});

	return <div className="WebSocket">hii</div>;
}

export default WebSocketExample;
