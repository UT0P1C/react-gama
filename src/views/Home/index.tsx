import React from 'react';

import { Container } from './style';

import {Link} from "react-router-dom";

const Home: React.FC = () => {
	return (
		<Container>
			<div>
				<h1>
					Home
				</h1>

				<Link to="/contact">
					Contact
				</Link>
				
			</div>
		</Container>
	);
}

export default Home;