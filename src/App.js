import React, { useState } from 'react';

import { Header } from './components/Header';
import { Board } from './components/Board';
import { KeyBoard } from './components/KeyBoard';

const App = () => {
	const [key, setKey] = useState('');

	return (
		<div style={container}>
			<Header />
			<Board />
			<KeyBoard />
		</div>
	);
}

const container = {
	height: '100%',
	width: '100%'
};

export default App;
