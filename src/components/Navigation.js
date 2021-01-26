import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className="Navigation">
			<Link className="link" to="/">
				<button>
					<i className="fas fa-users" />
				</button>
			</Link>
			<Link className="link" to="/chats">
				<button>
					<i className="fas fa-comments" />
				</button>
			</Link>
			<Link className="link" to="/setting">
				<button>
					<i className="fas fa-cogs" />
				</button>
			</Link>
		</div>
	);
}

export default Navigation;
