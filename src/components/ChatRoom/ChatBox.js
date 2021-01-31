import format from 'date-format';

function ChatBox({ info, userId }) {
	const isMine = String(info.speaker._id) === String(userId);
	return (
		<div className="ChatBox">
			{!isMine && (
				<div className="Others">
					<img src={info.speaker.avatarUrl} />
					<h5>{info.speaker.userName}</h5>
					<div className="ChatBoxMessage">{info.message}</div>
					<span className="Time">
						{format('MM/dd hh:mm', new Date(info.createdAt))}
					</span>
				</div>
			)}
			{isMine && (
				<div className="Mine">
					<div className="ChatBoxMessage">{info.message}</div>
					<span className="Time">
						{format('MM/dd hh:mm', new Date(info.createdAt))}
					</span>
				</div>
			)}
		</div>
	);
}

export default ChatBox;
