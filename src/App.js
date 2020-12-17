import React, { Component } from 'react';
import './App.css';

import { DragList } from './DragList'


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
				<DragList />
				</header>
			</div>
		);
	}
}

export default App;
