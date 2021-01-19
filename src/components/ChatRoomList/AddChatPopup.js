import { useState } from 'react';
import { useSelector } from 'react-redux';

function AddChatPopup() {
	const store = useSelector((state) => state);
	const [selectedUsers, setSelectedUsers] = useState([]);
	const [search, setSearch] = useState('');

	const userBoxClick = (e) => {
		const userBox = e.currentTarget;
		const checkbox = e.currentTarget.childNodes[0];
		if (e.target !== checkbox) checkbox.checked = !checkbox.checked;

		if (checkbox.checked) {
			setSelectedUsers(selectedUsers.concat(userBox.id));
		} else {
			setSelectedUsers(selectedUsers.filter((item) => item !== userBox.id));
		}
		console.log(selectedUsers);
	};

	const searchUpdate = (e) => {
		console.log(e.currentTarget.value);
		setSearch(e.currentTarget.value);
	};

	const link =
		'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg';

	return (
		<div className="AddChatPopup">
			<h3>채팅할 사람 추가하기</h3>
			<div className="SelectedUserList" />
			<input className="UserSearchBox" onChange={searchUpdate} />
			{store.user.friendsList
				.filter((item) => item.userName.includes(search))
				.map((item) => (
					<div
						className="SimpleUserBox"
						key={item._id}
						id={item._id}
						onClick={userBoxClick}
					>
						<input type="checkbox" readOnly />
						<img className="SimpleUserBoxImg" src={link} width="100" />
						<h4>{item.userName}</h4>
					</div>
				))}
		</div>
	);
}
export default AddChatPopup;
