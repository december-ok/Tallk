import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function AddChatPopup() {
	const userDiv = useRef();
	const nextButton = useRef();
	const store = useSelector((state) => state);
	const [selectedUsers, setSelectedUsers] = useState([]);
	const [search, setSearch] = useState('');

	const userBoxClick = (e) => {
		const userBox = e.currentTarget;
		const checkbox = e.currentTarget.childNodes[0];
		if (e.target !== checkbox) checkbox.checked = !checkbox.checked;

		if (checkbox.checked) {
			setSelectedUsers(selectedUsers.concat(userBox.data));

			//새로운 노드를 만들고 거기에 요소를 붙임
			const userIcon = document.createElement('div');
			const userImg = e.currentTarget.childNodes[1].cloneNode(true);
			const userName = e.currentTarget.childNodes[2].cloneNode(true);
			console.log(userName);
			userIcon.setAttribute('class', 'UserIcon');
			userIcon.setAttribute('id', userBox.data);
			userIcon.appendChild(userImg);
			userIcon.appendChild(userName);

			userDiv.current.appendChild(userIcon);
		} else {
			//제거
			setSelectedUsers(selectedUsers.filter((item) => item !== userBox.data));

			const userIcon = document.querySelector(`#${userBox.data}`);
			userDiv.current.removeChild(userIcon);
		}
		console.log(selectedUsers);
	};

	const searchUpdate = (e) => {
		console.log(e.currentTarget.value);
		setSearch(e.currentTarget.value);
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
			<div className="SelectedUserList" ref={userDiv} />
			<input className="UserSearchBox" onChange={searchUpdate} />
			{store.user.friendsList
				.filter((item) => item.userName.includes(search))
				.map((item) => (
					<div
						className="SimpleUserBox"
						key={item._id}
						data={item._id}
						onClick={userBoxClick}
					>
						<input type="checkbox" readOnly />
						<img className="SimpleUserBoxImg" src={link} width="100" />
						<h4>{item.userName}</h4>
					</div>
				))}
			<button className="CreateButton" ref={nextButton} disabled>
				만들기
			</button>
		</div>
	);
}
export default AddChatPopup;
