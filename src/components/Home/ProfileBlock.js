import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProfileBlock({ user }) {
	return (
		<Link to={`/profile/${user._id}`}>
			<div className="ProfileBlock">
				<img src={user.avatarUrl} alt="img" width="100" />
				<h3 className="UserName">{user.userName}</h3>
				<h5 className="Quote">{user.quoteMessage}</h5>
			</div>
		</Link>
	);
}

export default ProfileBlock;
