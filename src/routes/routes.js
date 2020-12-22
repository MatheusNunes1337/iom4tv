import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from '../pages/home.js'
import Biblioteca from '../pages/biblioteca.js'

export default function Routes () {

	return (
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
	);
}