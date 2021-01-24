import { useDispatch, useSelector } from 'react-redux';
import ProfileBlock from './ProfileBlock';

function Home() {
	const store = useSelector((state) => state);
	// console.log(store);

	return (
		<div className="Home">
			<div className="HomeHeader">
				<h1>Home</h1>
				<button className="AddRoomButton">
					<i className="fas fa-user-plus" />
				</button>
			</div>
			<div className="Content">
				{JSON.stringify(store)}
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
