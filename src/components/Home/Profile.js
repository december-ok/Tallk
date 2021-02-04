import { Profiler, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { store } from '../..';
function Profile() {
	const store = useSelector((state) => state);
	const { id } = useParams();
	const user = store.users.get(id) ? store.users.get(id) : store.user;

	useEffect(() => {
		if (document.querySelector('.Navigation'))
			document.querySelector('.Navigation').style.display = 'none';
		return () => {
			if (document.querySelector('.Navigation'))
				document.querySelector('.Navigation').style.display = '';
		};
	}, []);

	const link =
		'https://media-exp1.licdn.com/dms/image/C511BAQHM4mtKZ1RrdA/company-background_10000/0/1519798016830?e=2159024400&v=beta&t=mg1L7tpTsYv17HZ-uDcZiOveoGDfZzVOa1puPJfEDV0';
	return (
		<div className="Profile">
			<img className="Screen" src={link} />
			<div className="ProfileMain">
				<div className="ProfileHeader">
					<button
						onClick={() => {
							window.history.back();
						}}
					>
						<i className="fas fa-times" />
					</button>
					<div></div>
					{id === store.user._id && (
						<button
							onClick={() => {
								window.history.back();
							}}
						>
							<i className="fas fa-user-cog" />
						</button>
					)}
				</div>
				<div className="UserInfo">
					<h3 className="Quote">{user.quoteMessage}</h3>
					<img className="ProfileImg" src={user.avatarUrl} />
					<h3 className="UserName">{user.userName}</h3>
				</div>
				<div className="UserAction">
					<button className="ChatButton">
						<i className="fas fa-comments" />
						<h3>Chat</h3>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Profile;
