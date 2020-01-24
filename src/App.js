import React, { useState } from 'react';
import './App.css';
import { TimeLine, FestPanel } from './components';
import festivals from './mocks/festivals';

function App() {
	const [fest, setFest] = useState(null);
	const numberOfMonthsInLine = 3;
	const width = 1000;

	const extractFest = festName => {
		const selectedFest = festivals.find(item => item.name === festName);
		setFest(selectedFest);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Rock Headliner</p>
				<TimeLine
					festivals={festivals}
					numberOfMonthsInLine={numberOfMonthsInLine}
					width={width}
					extractFest={extractFest}
				/>
				{fest ? (
					<FestPanel
						name={fest.name}
						description={fest.description}
						startDate={fest.startDate}
						endDate={fest.endDate}
					/>
				) : (
					<div />
				)}
			</header>
		</div>
	);
}

export default App;
