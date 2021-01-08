import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Home from './Home/Home';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../modules/user';

function Main() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	const userId = '5ff854bdd17cbf4f8ce728be';
	useEffect(() => {
		const getUserData = async () => {
			const message = `http://localhost:4000/api/getUser?id=`;
			const { data } = await axios.get(message + userId);
			dispatch(setUser(data));
		};

		getUserData();
	}, []);

	return (
		<div className="Main">
			<Router>
				<div className="contents">
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default Main;
