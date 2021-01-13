import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { base_uri } from '../../modules';

function ChatRoom() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	const { id } = useParams();
	const info = store.room.get(id);

	useEffect(() => {
		const getChatRoom = async (from, amount) => {
			const message = `${base_uri}/api/getRoomChat?roomId=${info._id}&from=${from}&amout=${amount}`;
			const { data } = await axios.get(message);
			console.log(data);
		};
		if (!info.chatLoaded) {
			getChatRoom(info.chatIdList[info.chatIdList.length - 1], 50);
		}
	}, []);

	// if (!info.chatLoaded) {
	// 	return <div className="ChatRoom">Loading...</div>;
	// }
	return (
		<div className="ChatRoom">
			<div className="ChatRoomHeader">
				<Link to="/chats">
					<i className="fas fa-chevron-left" />
				</Link>
				<span className="ChatRoomName">{info.roomName}</span>
				<i className="fas fa-bars" />
			</div>
			<div className="ChatDialog"></div>
			<div className="ChatBottom">
				<i className="far fa-plus-square" />
				<input className="ChatInput"></input>
				<button className="ChatButton">
					<i className="fas fa-arrow-right" />
				</button>
			</div>
		</div>
	);
}

export default ChatRoom;
