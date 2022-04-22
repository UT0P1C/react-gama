import React, {useState, useCallback, FormEvent} from 'react';

import { useHistory, Link} from "react-router-dom";

import { Container } from './style';

import Loader from "../../components/Loader";

import { api } from "../../services/api";

import { toast } from "react-toastify";


const SignUp: React.FC = () => {

	interface IData {
		email: string;
		password: string;
	}

	const [data, setData] = useState<IData>({} as IData);

	const [load, setLoad] = useState(true);

	const history = useHistory();

	const handleSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoad(true);
		api.post("users", data).then(response => {
			setLoad(false);
			toast.success("Success !", {
				theme: 'colored',
				hideProgressBar: false,
				onClose: () => history.push("/signin")
			});
		}).catch(e => {
			toast.error("Failed :(", {
				theme: 'colored'
			});
		}).finally(() => setLoad(false));

	}, [data, history])


	if(load){
		return <Loader/>
	}
	return (
		<Container>
			
			<div className='card'>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<input 
						type="text" 
						placeholder='Email'
						onChange={e => setData({...data, email: e.target.value})}
					/>
					<input 
						type="password" 
						placeholder='Password'
						onChange={e => setData({...data, password: e.target.value})}
					/>
					<input 
						type="submit" 
						id="register__button" 
						value="Sign In" 
					/>

				</form>

				<Link to="/signup"> New here? Sign Up</Link>
			</div>
		</Container>
	);
}

export default SignUp;