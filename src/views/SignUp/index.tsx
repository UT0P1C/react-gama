import React, {useState, useCallback, FormEvent} from 'react';

import { useHistory} from "react-router-dom";

import { Container } from './style';

import { api } from "../../services/api";

const SignUp: React.FC = () => {

	interface IData {
		name: string;
		email: string;
		password: string;
	}

	const [data, setData] = useState<IData>({} as IData);

	const history = useHistory();

	const handleSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		api.post("users", data).then(response => {
			console.log(response.data);
			history.push("/signin");
		})

	}, [data, history])
	return (
		<Container>
			
			<div className='card'>
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>
					<input 
						type="text" 
						placeholder='Name'
						onChange={e => setData({...data, name: e.target.value})}
					/>
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
						value="Register" 
					/>

				</form>
			</div>
		</Container>
	);
}

export default SignUp;