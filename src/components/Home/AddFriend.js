import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserEmail } from '../../apiController';

function AddFriend() {
	const [searchUser, setSearchUser] = useState();
	const emailInput = useRef();
	const searchUserEmail = async () => {
		const email = emailInput.current.value;
		const data = await getUserEmail(email);
		setSearchUser(data);
	};

	return (
		<div className="AddFriend">
			<div className="AddFriendHeader">
				<Link to="/">
					<button>
						<i className="fas fa-chevron-left" />
					</button>
				</Link>
				<h3>Add Friend by E-mail</h3>
			</div>
			<div className="AddFriendSearch">
				<input className="EmailInput" ref={emailInput} />
				<button className="Search" onClick={searchUserEmail}>
					<i className="fas fa-search" />
				</button>
			</div>
			<div className="AddFriendResult">
				{!searchUser && <h4>No Result</h4>}
				{searchUser && (
					<>
						<img src={searchUser.avatarUrl} />
						<h4>{searchUser.userName}</h4>
						<button>AddFriend</button>
					</>
				)}
			</div>
		</div>
	);
}

export default AddFriend;
