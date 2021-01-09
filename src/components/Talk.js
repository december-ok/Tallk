import { useDispatch, useSelector } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { setUser } from '../modules/user';
import Home from './Home/Home';
import Main from './Main';

function Talk() {
	const store = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div className="Talk">
			<Router>
				<div className="contents">
					<Switch>
						<Route path="/" component={Main} />
						<Route path="/auth" />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default Talk;
