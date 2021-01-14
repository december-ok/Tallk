import { useSelector } from 'react-redux';

function ChatBox({ info, userId }) {
	const link =
		'https://cdn.vox-cdn.com/thumbor/0BrQddT3Tlqzjwl5kviUWdIjgJs=/0x0:4256x2706/1200x800/filters:focal(2070x1006:2750x1686)/cdn.vox-cdn.com/uploads/chorus_image/image/51305115/114916541.0.jpg';

	const isMine = String(info.speaker._id) === String(userId);
	console.log(info);
	return (
		<div className="ChatBox">
			{!isMine && (
				<div className="Others">
					<img src={link} width="30" />
					<h5>{info.speaker.userName}</h5>
					<div className="ChatBoxMessage">{info.message}</div>
					<span className="Time">{info.createdAt}</span>
				</div>
			)}
			{isMine && (
				<div className="Mine">
					<span className="Time">{info.createdAt}</span>
					<div className="ChatBoxMessage">{info.message}</div>
				</div>
			)}
		</div>
	);
}

export default ChatBox;
