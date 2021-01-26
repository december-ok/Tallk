import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import { Websocket } from './Websocket/WebSocket';
import { addRoom } from '../modules/room';
import ChatRoom from './ChatRoom/ChatRoom';
import { updateUser } from '../modules/users';
import { getRoom, getUser } from '../apiController';
import Navigation from './Navigation';
import { setUser } from '../modules/user';
import Setting from './Setting';
import Profile from './Home/Profile';
import AddFriend from './Home/AddFriend';
import AddChatPopup from './ChatRoomList/AddChatPopup';

function Main() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();
	const [Loaded, setLoaded] = useState(false);

	const userId = '600f65ca968bf33884b4b0db';
	useEffect(() => {
		const getUserData = async () => {
			const data = await getUser(userId);
			dispatch(setUser(data));

			const roomPro = data.roomList.map((roomId) => {
				return (async () => {
					const roomData = await getRoom({ roomId });
					dispatch(addRoom(roomData));
				})();
			});
			const userPro = data.friendsList.map((userId) => {
				return (async () => {
					const userData = await getUser(userId);
					dispatch(updateUser(userId, userData));
				})();
			});

			await Promise.all([...roomPro, ...userPro]);
			// console.log('All Loaded done');

			Websocket.open(data._id);
			setLoaded(true);
		};
		if (userId) {
			getUserData();
			return () => {
				Websocket.close();
			};
		} else {
			window.location.href = '';
		}
	}, []);

	if (store.user.block) {
		return (
			<div className="Loading">
				<em>Only one client is Allowed!</em>
			</div>
		);
	}
	if (!Loaded) {
		return (
			<div className="Loading">
				<h1>Loading...</h1>
				<h5>If loading is too long, something went to Wrong!</h5>
			</div>
		);
	}

	return (
		<div className="Main">
			<Navigation />
			<Router>
				<div className="contents">
					<Switch>
						<Route path="/profile/:id" component={Profile} />
						<Route path="/chats/:id" component={ChatRoom} />
						<Route path="/setting" component={Setting} />
						<Route path="/addChat" component={AddChatPopup} />
						<Route path="/addFriend" component={AddFriend} />
						<Route path="/chats" component={ChatRoomList} />
						<Route path="/:id">No such Page</Route>
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default Main;
