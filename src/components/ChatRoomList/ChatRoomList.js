import { useSelector } from 'react-redux';
import ChatRoomBlock from './ChatRoomBlock';

function ChatRoomList() {
	const store = useSelector((state) => state);
	return (
		<div className="ChatRoomList">
			<h1>Chats</h1>
			{/* sort function 추가하기~!!!!!!! */}
			{Array.from(store.room.entries()).map((item) => (
				<ChatRoomBlock info={item[1]} key={item[1]._id} />
			))}
		</div>
	);
}

export default ChatRoomList;
