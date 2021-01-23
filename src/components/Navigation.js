import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className="Navigation">
			<Link className="link" to="/">
				<i className="fas fa-users" />
			</Link>
			<Link className="link" to="/chats">
				<i className="fas fa-comments" />
			</Link>
		</div>
	);
}

export default Navigation;
