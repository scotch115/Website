import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import fof from './components/fof';
import QuillPrivacy from './components/Privacy';
import * as serviceWorker from './tests/serviceWorker';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';


const routing = (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/privacy" component={QuillPrivacy} />
				<Link to="/#blog" />
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
