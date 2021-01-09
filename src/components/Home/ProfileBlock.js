import { useDispatch, useSelector } from 'react-redux';

function ProfileBlock({ user }) {
	const link =
		'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg';
	return (
		<div className="ProfileBlock">
			<img src={link} alt="img" width="100" />
			<h3 className="UserName">{user.userName}</h3>
			<h5 className="Quote">{user.quoteMessage}</h5>
		</div>
	);
}

export default ProfileBlock;
