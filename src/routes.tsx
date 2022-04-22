import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './views/Home';
import Contact from "./views/Contact";
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Dash from './views/Dash';

const Router: React.FC = () => {
	return (
		<BrowserRouter>

			<Switch>

				<Route path="/" exact component={Home}/>

				<Route path="/contact" exact component={Contact}/>
				<Route path="/signin" exact component={SignIn}/>
				<Route path="/signup" exact component={SignUp}/>
				<Route path="/dashboard" exact component={Dash} />

			</Switch>
		
		</BrowserRouter>
	);
}

export default Router;