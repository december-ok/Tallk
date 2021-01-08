import { useDispatch, useSelector } from 'react-redux';

function ProfileBlock({}) {
	const store = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const link =
		'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg';
	return (
		<div className="ProfileBlock">
			<img src={link} alt="img" width="30" />
			<h3 className="UserName">{store.userName}</h3>
		</div>
	);
}

export default ProfileBlock;
