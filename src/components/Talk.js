import { useDispatch, useSelector } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { setUser } from '../modules/user';
import Login from './Auth/Login';
import Home from './Home/Home';
import Main from './Main';

function Talk() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div className="Talk">
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					{/* <Route path="/join" component={} /> */}
					<Route path="/" component={Main} />
				</Switch>
			</Router>
		</div>
	);
}

export default Talk;
