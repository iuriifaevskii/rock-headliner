import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import festivals from './mocks/festivals';

const fetchFestsData = async () => festivals;
const numberOfMonthsInLine = 3;
const width = 1000;

ReactDOM.render(
	<App
		fetchFestsData={fetchFestsData}
		numberOfMonthsInLine={numberOfMonthsInLine}
		width={width}
	/>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
