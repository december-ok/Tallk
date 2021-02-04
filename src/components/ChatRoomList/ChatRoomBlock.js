import { Link } from 'react-router-dom';
import ChatRoomList from './ChatRoomList';

function ChatRoomBlock({ info }) {
	const link =
		'https://cdn.vox-cdn.com/thumbor/0BrQddT3Tlqzjwl5kviUWdIjgJs=/0x0:4256x2706/1200x800/filters:focal(2070x1006:2750x1686)/cdn.vox-cdn.com/uploads/chorus_image/image/51305115/114916541.0.jpg';
	return (
		<Link to={`/chats/${info._id}`}>
			<div className="ChatRoomBlock">
				<img src={link} alt="profile_img" width="100" />
				<div className="RoomTitle">
					<h3>{info.roomName.substring(0, 12)}</h3>
					<i className="fas fa-user" />
					<span>{info.userList.length}</span>
				</div>
				<div>
					<h5>{info.recentChat}</h5>
					<span class="Notice">{`5`}</span>
				</div>
			</div>
		</Link>
	);
}

export default ChatRoomBlock;
