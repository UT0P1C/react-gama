import React from 'react';

import { Container } from './style';

import Lottie from 'react-lottie';

import animation from "../../assets/9844-loading-40-paperplane.json";

const Loader: React.FC = () => {

	const defaultOptions = {
		loop: true,
    	autoplay: true, 
    	animationData: animation
	}

	return (
		<Container>
			<div>
				<h1>Loading...</h1>
				<Lottie 
				options={defaultOptions}
				height={400}
				width={400}
				/>
			</div>

		</Container>
	);
}

export default Loader;