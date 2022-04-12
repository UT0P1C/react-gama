import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './views/Home';

import Contact from "./views/Contact"


const Router: React.FC = () => {
	return (
		<BrowserRouter>

			<Switch>

			<Route path="/" exact component={Home}/>

			<Route path="/contact" exact component={Contact}/>

			</Switch>
		
		</BrowserRouter>
	);
}

export default Router;