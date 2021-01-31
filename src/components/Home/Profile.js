import { Profiler, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { store } from '../..';
function Profile() {
	const store = useSelector((state) => state);
	const { id } = useParams();
	const user = store.users.get(id) ? store.users.get(id) : store.user;

	return (
		<div className="Profile">
			<button
				onClick={() => {
					window.history.back();
				}}
			>
				<i className="fas fa-times" />
			</button>
			<div className="UserInfo">
				<h3 className="Quote">{user.quoteMessage}</h3>
				<img className="ProfileImg" src={user.avatarUrl} />
				<h3 className="UserName">{user.userName}</h3>
			</div>
			<div className="UserAction">
				<button className="ChatButton">
					<i className="fas fa-comments" />
					<h4>Chat</h4>
				</button>
			</div>
		</div>
	);
}

export default Profile;
