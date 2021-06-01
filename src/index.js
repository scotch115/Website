import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import fof from './fof';
import Privacy from './Privacy';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const routing = (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/privacy" component={Privacy} />
				<Route component={fof} />
			</Switch>
		</div>
	</BrowserRouter>
)


ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
