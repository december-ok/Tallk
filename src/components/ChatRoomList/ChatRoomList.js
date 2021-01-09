import { useSelector } from 'react-redux';
import ChatRoomBlock from './ChatRoomBlock';

function ChatRoomList() {
	const store = useSelector((state) => state);
	return (
		<div className="ChatRoomList">
			<h1>Chats</h1>
			{store.user.roomList.map((item) => (
				<ChatRoomBlock info={item} />
			))}
		</div>
	);
}

export default ChatRoomList;
