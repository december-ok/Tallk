import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from '../../apiController';

function Login({ history }) {
	const email = useRef();
	const password = useRef();
	const loginBtn = useRef();
	const msgLbl = useRef();
	const [msg, setMsg] = useState();

	const onLogin = async () => {
		if (email.current.value === '' || password.current.value === '') {
			setMsg('Input Email or Password!');
			msgLbl.current.classList.add('vibe');
			setTimeout(() => {
				msgLbl.current.classList.remove('vibe');
			}, 200);
		} else {
			loginBtn.current.setAttribute('disabled', '');
			try {
				const data = await postLogin({
					email: email.current.value,
					password: password.current.value,
				});
			} catch (error) {
				setMsg('Wrong Email or Password!');
				msgLbl.current.classList.add('vibe');
				setTimeout(() => {
					msgLbl.current.classList.remove('vibe');
				}, 200);
				loginBtn.current.removeAttribute('disabled');
			}
		}
	};
	return (
		<div className="Login">
			<div className="LoginContent">
				<h1>Tallk</h1>
				<h3>🔒Login</h3>
				<div className="InputArea">
					<input type="text" name="email" id="email" required ref={email} />
					<label>Email</label>
				</div>
				<div className="InputArea">
					<input type="password" name="pwd" id="pwd" required ref={password} />
					<label>Password</label>
				</div>
				<div className="ButtonArea">
					<button ref={loginBtn} onClick={onLogin}>
						Login
					</button>
				</div>
				<div className="ErrorArea">
					<label className="Error" ref={msgLbl}>
						{msg}
					</label>
				</div>
				<Link to="/">
					<button>Join</button>
				</Link>
			</div>
		</div>
	);
}

export default Login;
