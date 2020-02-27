import React, { useState, useEffect } from 'react';

import { apiUrl } from './config';
import { TimeLine, FestPanel } from './components';

function App() {
	const numberOfMonthsInLine = 3;
	const width = 900;

	const [fest, setFest] = useState(null);
	const [selectedFestID, setSelectedFestId] = useState(null);
	const [fests, setFests] = useState([]);
	const [headliners, setHeadliners] = useState([]);
	const [artistsExceptForHeadliners, setArtistsExceptForHeadliners] = useState(
		[]
	);

	const fetchFests = async () =>
		fetch(`${apiUrl}/fest`)
			.then(response => response.json())
			.then(responseJSON => responseJSON.data);

	const fetchArtistsExceptForHeadliners = async festID =>
		fetch(`${apiUrl}/artist/except-for-headliners/${festID}`)
			.then(response => response.json())
			.then(responseJSON => responseJSON.data);

	const fetchHeadliners = async festID =>
		fetch(`${apiUrl}/artist/headliners/${festID}`)
			.then(response => response.json())
			.then(responseJSON => responseJSON.data);

	useEffect(() => {
		const fetchData = async () => {
			setFests(await fetchFests());
		};
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			setArtistsExceptForHeadliners(
				await fetchArtistsExceptForHeadliners(selectedFestID)
			);
			setHeadliners(await fetchHeadliners(selectedFestID));
		}
		if (selectedFestID) {
			fetchData();
		}
	}, [selectedFestID]);

	const title = {
		fontSize: '56px',
	};

	const header = {
		backgroundColor: '#1c2329',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',
		color: 'white',
	};

	const container = {
		textAlign: 'center',
	};

	const extractFest = festName => {
		const selectedFest = fests.find(item => item.name === festName);
		const { _id } = selectedFest;
		setFest(selectedFest);
		setSelectedFestId(_id);
	};

	return (
		<div style={container}>
			<header style={header}>
				<h1 style={title}>Select Festival Day</h1>
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
						banner={fest.banner}
						site={fest.site}
						ticket={fest.ticket}
						endDate={fest.endDate}
						headliners={headliners}
						socialNetworks={fest.socialNetworks}
						artistsExceptForHeadliners={artistsExceptForHeadliners}
					/>
				) : (
					<div />
				)}
			</header>
		</div>
	);
}

export default App;
