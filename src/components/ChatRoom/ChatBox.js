import { useSelector } from 'react-redux';

function ChatBox({ info, userId }) {
	const link =
		'https://cdn.vox-cdn.com/thumbor/0BrQddT3Tlqzjwl5kviUWdIjgJs=/0x0:4256x2706/1200x800/filters:focal(2070x1006:2750x1686)/cdn.vox-cdn.com/uploads/chorus_image/image/51305115/114916541.0.jpg';

	const isMine = info.speaker._id === userId;
	return (
		<div className="chatBox">
			{!isMine && (
				<>
					<img src={link} width="30" />
					<h5>{info.speaker}</h5>
				</>
			)}
			<div className="chatBoxMessage">{info.message}</div>
		</div>
	);
}

export default ChatBox;
