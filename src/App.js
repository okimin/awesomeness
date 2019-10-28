import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Routes />
				<Footer />
			</div>
		);
	}
}

export default App;
