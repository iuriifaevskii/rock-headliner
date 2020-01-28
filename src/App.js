import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import { TimeLine, FestPanel } from './components';

function App(props) {
	const { fetchFestsData, numberOfMonthsInLine, width } = props;
	const [fest, setFest] = useState(null);
	const [fests, setFests] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const festivals = await fetchFestsData();
			setFests(festivals);
		}
		fetchData();
	});

	const extractFest = festName => {
		const selectedFest = fests.find(item => item.name === festName);
		setFest(selectedFest);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Rock Headliner</p>
				{fests.length ? (
					<TimeLine
						festivals={fests}
						numberOfMonthsInLine={numberOfMonthsInLine}
						width={width}
						extractFest={extractFest}
					/>
				) : (
					<div>Loading...</div>
				)}
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

App.propTypes = {
	numberOfMonthsInLine: PropTypes.oneOf([1, 2, 3]),
	width: PropTypes.oneOf([700, 800, 900, 1000]),
	fetchFestsData: PropTypes.func.isRequired,
};

App.defaultProps = {
	numberOfMonthsInLine: 3,
	width: 1000,
};

export default App;
