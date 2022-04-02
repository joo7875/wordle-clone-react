import React from 'react';

import { Header } from './components/Header';
import { Board } from './components/Board';
import { KeyBoard } from './components/KeyBoard';

const App = () => {

	return (
		<div style={container}>
			<div style={sub_container}>
				<Header />
				<Board />
				<KeyBoard />
			</div>
		</div>
	);
}

const container = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	alignItems: 'center'
};

const sub_container = {
	maxWidth: '500px',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column'
};

export default App;
