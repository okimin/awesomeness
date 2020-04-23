import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navigation />
				<Routes />
				<Footer />
			</div>
		);
	}
}

export default App;
