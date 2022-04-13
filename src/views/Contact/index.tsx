import React, {useState} from "react";

import { Link } from 'react-router-dom';

import { Container } from "./style";

const Contact: React.FC = () => {

	interface IData {
		name: string;
		email: string;
	}

	const [data, setData] = useState<IData>({} as IData);

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
					<form onSubmit={() => {} }>

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

				</div>

			</div>
		</Container>
	);
}

export default Contact;