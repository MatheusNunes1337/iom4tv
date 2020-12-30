import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from '../pages/home.js'
import Biblioteca from '../pages/biblioteca.js'

import { ButtonProvider } from '../contexts/buttonContext'
import { RequestProvider } from '../contexts/requestContext'

export default function Routes () {

	return (
		<RequestProvider>
			<ButtonProvider>
				<Router> 
		  			<Switch>
		  				<Route path="/biblioteca">
				       		<Biblioteca />
				     	</Route>
				     	<Route path="/">
				       		<Home />
				     	</Route>
		  			</Switch>	
				</Router>
			</ButtonProvider>
		</RequestProvider>
	);
}