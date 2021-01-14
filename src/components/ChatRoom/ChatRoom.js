import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { base_uri } from '../..';
import { addPrevChatObjList } from '../../modules/room';
import { Websocket } from '../Websocket/WebSocket';
import ChatBox from './ChatBox';

function ChatRoom() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	const { id } = useParams();
	const inputBox = useRef();
	const info = store.room.get(id);

	useEffect(() => {
		const getChatRoom = async (from, amount) => {
			const message = `${base_uri}/api/getRoomChat?roomId=${info._id}&from=${from}&amount=${amount}`;
			const { data } = await axios.get(message);
			dispatch(addPrevChatObjList(id, data));
			info.chatLoaded = true;

			// console.log(data);
		};
		if (info.chatIdList.length && !info.chatLoaded) {
			getChatRoom(info.chatIdList[info.chatIdList.length - 1], 50);
		}
	}, []);

	const sendChat = () => {
		Websocket.send({
			type: 'sendRealTimeChat',
			data: {
				userId: store.user._id,
				roomId: info._id,
				chat: inputBox.current.value,
			},
		});
		inputBox.current.value = '';
	};

	if (!info.chatLoaded) {
		return <div className="ChatRoom">Loading...</div>;
	}
	return (
		<div className="ChatRoom">
			<div className="ChatRoomHeader">
				<Link to="/chats">
					<i className="fas fa-chevron-left" />
				</Link>
				<span className="ChatRoomName">{info.roomName}</span>
				<i className="fas fa-bars" />
			</div>

			<div className="ChatDialogs">
				{info.chatObjList.map((item) => (
					<ChatBox info={item} userId={store.user._id} key={item._id} />
				))}
			</div>

			<div className="ChatBottom">
				<i className="far fa-plus-square" />
				<input className="ChatInput" ref={inputBox}></input>
				<button className="ChatButton" onClick={sendChat}>
					<i className="fas fa-arrow-right" />
				</button>
			</div>
		</div>
	);
}

export default ChatRoom;
