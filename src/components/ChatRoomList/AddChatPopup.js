import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { postCreateChatRoom } from '../../apiController';

function AddChatPopup() {
	const userDiv = useRef();
	const nextButton = useRef();
	const store = useSelector((state) => state);
	const [selectedUsers, setSelectedUsers] = useState([]);
	const [roomName, setRoomName] = useState([]);
	const [search, setSearch] = useState('');

	const userBoxClick = (e) => {
		const userBox = e.currentTarget;
		const checkbox = e.currentTarget.childNodes[0];
		// 이것이 Id...
		// console.log(userBox.attributes.data.value);
		if (e.target !== checkbox) checkbox.checked = !checkbox.checked;

		if (checkbox.checked) {
			setSelectedUsers(selectedUsers.concat(userBox.attributes.data.value));
			setRoomName(roomName.concat(e.currentTarget.childNodes[2].textContent));
		} else {
			//제거
			setSelectedUsers(
				selectedUsers.filter((item) => item !== userBox.attributes.data.value)
			);
			setRoomName(
				roomName.filter(
					(item) => item !== e.currentTarget.childNodes[2].textContent
				)
			);
		}
	};

	const searchUpdate = (e) => {
		// console.log(e.currentTarget.value);
		setSearch(e.currentTarget.value);
	};

	const makeNewChatRoom = async () => {
		const data = await postCreateChatRoom({
			creator: store.user._id,
			roomName: roomName.concat(store.user.userName).join(', '),
			userList: selectedUsers.concat(store.user._id),
		});
		window.location.href = 'http://localhost:3000/#/chats/' + data._id;
	};

	useEffect(() => {
		//인원이 있을경우 버튼 비활성화
		if (selectedUsers.length) {
			nextButton.current.removeAttribute('disabled');
		} else {
			nextButton.current.setAttribute('disabled', true);
		}
	}, [selectedUsers]);

	const link =
		'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg';

	return (
		<div className="AddChatPopup">
			<h3>채팅할 사람 추가하기</h3>
			<div className="SelectedUserList" ref={userDiv}>
				{selectedUsers.map((item) => {
					const user = store.users.get(item);
					return (
						<>
							<img src={user.avatarUrl} alt={user.userName} />
							<h4>{user.userName}</h4>
						</>
					);
				})}
			</div>
			<input className="UserSearchBox" onChange={searchUpdate} />
			{store.user.friendsList
				.filter((item) => {
					const user = store.users.get(item);
					return user.userName.includes(search);
				})
				.map((item) => {
					const user = store.users.get(item);
					// console.log(user);
					return (
						<div
							className="SimpleUserBox"
							key={user._id}
							data={user._id}
							onClick={userBoxClick}
						>
							<input type="checkbox" readOnly />
							<img className="SimpleUserBoxImg" src={link} width="100" />
							<h4>{user.userName}</h4>
						</div>
					);
				})}
			<button
				className="CreateButton"
				onClick={makeNewChatRoom}
				ref={nextButton}
			>
				New Chat
			</button>
		</div>
	);
}
export default AddChatPopup;
