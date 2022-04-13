import React, {useState , useCallback, FormEvent } from "react";

import { Link } from 'react-router-dom';

import { Container } from "./style";

import { api } from "../../services/api";

const Contact: React.FC = () => {

	interface IData {
		name: string;
		email: string;
	}

	const [data, setData] = useState<IData>({} as IData);

	const [submit, setSubmit] = useState(false);

	const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		api.post("", data).then(response => {
			if(response.status === 200) {
				setSubmit(true);
			}
		});
	}, [data])

	return (
		<Container>

			<div className='form-wrapper'>
			
				<h1>
					Contact
				</h1>

				<Link to="/">
						Home
				</Link>

				name: {data?.name}
				<br />
				email: {data?.email}

				<div className="card">

					{ submit ? (
						<div>
							<h1>Thanks for sharing your data</h1>

						</div>
					) : (

					<form onSubmit={handleSubmit}>

						<input
							type="text"
							placeholder='Name'
							onChange={e => setData({...data, name: e.target.value})}
						/>
						<input
							type="text"
							placeholder='E-mail'
							onChange={e => setData({...data, email: e.target.value})}
						/>
						<input type="submit" value="Submit" />

					</form>
					)}


				</div>

			</div>

		</Container>
	);
}

export default Contact;