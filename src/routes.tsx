import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './views/Home';
import Contact from "./views/Contact";
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';


const Router: React.FC = () => {
	return (
		<BrowserRouter>

			<Switch>

			<Route path="/" exact component={Home}/>

			<Route path="/contact" exact component={Contact}/>
			<Route path={"/signin"} exact component={SignIn}/>
			<Route path={"/signup"} exact component={SignUp}/>

			</Switch>
		
		</BrowserRouter>
	);
}

export default Router;