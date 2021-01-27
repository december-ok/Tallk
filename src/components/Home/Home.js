import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileBlock from './ProfileBlock';

function Home() {
	const store = useSelector((state) => state);
	// console.log(store);

	const onClick = (e) => {};

	return (
		<div className="Home">
			<div className="HomeHeader Header">
				<h1>Home</h1>
				<Link to={'/addFriend'}>
					<button className="AddRoomButton" onClick={onClick}>
						<i className="fas fa-user-plus" />
					</button>
				</Link>
			</div>
			<div className="Content">
				{/* {JSON.stringify(store)} */}
				<ProfileBlock user={store.user} />
				<h5 className="friendIndex">친구 {store.user.friendsList.length}</h5>
				{store.user.friendsList.map((item) => {
					//get Friend info from store
					const user = store.users.get(item);
					return <ProfileBlock user={user} key={user._id} />;
				})}
			</div>
		</div>
	);
}

export default Home;
