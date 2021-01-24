import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { base_uri } from '../..';
import { getChatRoom } from '../../apiController';
import { addPrevChatObjList, removeRoom } from '../../modules/room';
import { Websocket } from '../Websocket/WebSocket';
import ChatBox from './ChatBox';

function ChatRoom() {
	const link =
		'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg';
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	const { id } = useParams();
	const inputBox = useRef();
	const info = store.room.get(id);
	const [chatLoaded, setChatLoaded] = useState(false);

	useEffect(() => {
		const getChat = async (from, amount) => {
			const data = await getChatRoom({ roomId: id, from, amount });
			dispatch(addPrevChatObjList(id, data));
			info.chatLoaded = true;
			setChatLoaded(true);
		};
		if (info.chatIdList.length && !info.chatLoaded) {
			// console.log('getdata');
			getChat(info.chatIdList[info.chatIdList.length - 1], 50);
		}
		setChatLoaded(true);
		info.chatLoaded = true;

		return () => {
			console.log('hi');
		};
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

	const exitRoom = async () => {
		dispatch(removeRoom(id));
		window.location.href = `http://localhost:3000/#/chats`;
		const message = `${base_uri}/room/exitRoom`;
		const { data } = await axios.post(message, {
			roomId: id,
			userId: store.user._id,
		});
	};

	return (
		<>
			{!info && <div className="ChatRoom">No such Room</div>}
			{!chatLoaded && <div className="ChatRoom">Loading...</div>}
			{info && chatLoaded && (
				<div className="ChatRoom">
					<div className="ChatRoomMain">
						<div className="ChatRoomHeader">
							<button
								onClick={() => {
									window.history.back();
								}}
							>
								<i className="fas fa-chevron-left" />
							</button>
							<span className="ChatRoomName">{info.roomName}</span>
							<button>
								<i className="fas fa-bars" />
							</button>
						</div>

						<div className="ChatDialogs">
							{info.chatObjList.map((item) => (
								<ChatBox info={item} userId={store.user._id} key={item._id} />
							))}
						</div>

						<div className="ChatBottom">
							<button>
								<i className="far fa-plus-square" />
							</button>
							<input className="ChatInput" ref={inputBox}></input>
							<button className="ChatButton" onClick={sendChat}>
								<i className="fas fa-arrow-right" />
							</button>
						</div>
					</div>
					<div className="ChatRoomOption">
						<h3>Chat Option</h3>
						<h4>Users</h4>
						{
							<div className="SimpleUserBox">
								<img className="SimpleUserBoxImg" src={link} width="100" />
								<i className="fas fa-user" />
								<h4>{store.user.userName}</h4>
							</div>
						}
						{store.room
							.get(String(id))
							.userList.filter((item) => item !== store.user._id)
							.map((item) => {
								const user = store.users.get(item);
								return (
									<div className="SimpleUserBox" key={item}>
										<img className="SimpleUserBoxImg" src={link} width="100" />
										<h4>{user.userName}</h4>
									</div>
								);
							})}
						<button className="InviteButton">Invite (notImplemented)</button>
						<button className="Exit Room" onClick={exitRoom}>
							Exit Room
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default ChatRoom;
