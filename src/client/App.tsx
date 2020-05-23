import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';

export default class App extends React.Component {

	

	render() {
		return (
			<main>
				<BrowserRouter>

				<section className="header">
					<div className="jumbotron-primary jumbotron-fluid header py-3">
						<div className="container text-center align-middle">
						
							<h1 className="display-4">Chirper</h1>
							
						</div>
						<br />
					</div>
					<Link className="link" to="/">Home</Link>
					<Link className="link" to="/chirp/add">Add Chirp</Link>
				</section>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/other" component={() => <h1>Other Page</h1>} />
					</Switch>
				</BrowserRouter>
			</main>

		);
	}
}




