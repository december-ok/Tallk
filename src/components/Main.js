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

function Main() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();
	const [Loaded, setLoaded] = useState(false);

	const userId = '5ff854bdd17cbf4f8ce728be';
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

		getUserData();
		return () => {
			Websocket.close();
		};
	}, []);

	if (!Loaded) {
		return (
			<div className="Main">
				<h1>Loading...</h1>
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
