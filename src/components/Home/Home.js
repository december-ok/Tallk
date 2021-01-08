import { useDispatch, useSelector } from 'react-redux';
import ProfileBlock from './ProfileBlock';

function Home() {
	const store = useSelector((state) => state);
	return (
		<div className="Home">
			<h1>Home</h1>
			<div className="Content">
				{JSON.stringify(store)}
				<ProfileBlock />
			</div>
		</div>
	);
}

export default Home;
