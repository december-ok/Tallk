import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from './Home/Home';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../modules/user';
import ChatRoomList from './ChatRoomList/ChatRoomList';
import { Websocket } from './Websocket/WebSocket';
import { initRoom } from '../modules/room';
import ChatRoom from './ChatRoom/ChatRoom';
import { base_uri } from '..';

function Main() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	const userId = '5ff854bdd17cbf4f8ce728be';
	useEffect(() => {
		const getUserData = async () => {
			const message = `${base_uri}/api/getUser?id=`;
			const { data } = await axios.get(message + userId);
			dispatch(initRoom(data));
			//가장 마지막에
			dispatch(setUser(data));
			Websocket.open(data._id);
		};

		getUserData();
		return () => {
			Websocket.close();
		};
	}, []);

	if (!store.user.loaded) {
		return (
			<div className="Main">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div className="Main">
			<Router>
				<div className="contents">
					<Switch>
						<Route path="/profile/:id" />
						<Route path="/chats/:id" component={ChatRoom} />
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
