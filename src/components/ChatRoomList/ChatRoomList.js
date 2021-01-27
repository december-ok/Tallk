import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddChatPopup from './AddChatPopup';
import ChatRoomBlock from './ChatRoomBlock';

function ChatRoomList() {
	const store = useSelector((state) => state);
	// console.log(store);
	return (
		<div className="ChatRoomList">
			<div className="ChatRoomListHeader Header">
				<h1>Chats</h1>
				<Link to="/addChat">
					<button className="AddRoomButton">
						<i className="fas fa-comment-medical" />
					</button>
				</Link>
			</div>
			{/* sort function 추가하기!!!!!!! */}
			{Array.from(store.room.entries())
				.sort((a, b) => {
					console.log(
						new Date(a[1].recentChatTime) - new Date(b[1].recentChatTime)
					);
					return new Date(b[1].recentChatTime) - new Date(a[1].recentChatTime);
				})
				.map((item) => (
					<ChatRoomBlock info={item[1]} key={item[1]._id} />
				))}
		</div>
	);
}

export default ChatRoomList;
