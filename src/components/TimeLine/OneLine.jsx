import React from 'react';
import PropTypes from 'prop-types';

import {
	monthIndexToName,
	monthIndexToColor,
	yearToday,
	daysInMonth,
} from '../../utils/dateManipulations';

import HorizontalLine from './HorizontalLine';

function OneLine(props) {
	const {
		numberOfMonthsInLine,
		width,
		monthNumber,
		festivalsForSelectedMonth,
		extractFest,
	} = props;

	const widthOfOneCol = width / numberOfMonthsInLine;
	const days = daysInMonth(new Date(`${monthNumber}/1/${yearToday()}`));
	const oneDayIndent = widthOfOneCol / days;
	const lines = [];

	const lineWrapper = {
		width: `${widthOfOneCol}px`,
		minHeight: 40,
		borderRadius: '5px',
		padding: '0px 0px 5px 0px',
		backgroundSize: `${widthOfOneCol}px 50px`,
	};

	const monthText = {
		fontSize: '14px',
		color: '#000000',
		fontWeight: 900,
	};

	const monthBackground = {
		backgroundColor: monthIndexToColor(monthNumber),
		backgroundImage:
			'linear-gradient(90deg, transparent 30%, rgba(255,255,255,.5) 70%)',
		borderRadius: '4px',
		margin: '3px',
		border: '1px solid #ffffff',
	};

	const eachDayArray = () => {
		const festRow = [];
		for (let day = 0; day < days; day += 1) {
			const findingFest = festivalsForSelectedMonth.filter(fest => {
				return fest.date.getDate() === day + 1;
			});
			festRow.push(findingFest);
		}
		return festRow;
	};

	const maxCountOfCols = () => {
		return Math.max(...eachDayArray().map(array => array.length));
	};

	const buildFestArrays = () => {
		const finalArray = [];

		for (let i = 0; i < maxCountOfCols(); i += 1) {
			finalArray[i] = [];
		}

		eachDayArray().forEach(array => {
			for (let i = 0; i < array.length; i += 1) {
				finalArray[i].push(array[i]);
			}
		});
		return finalArray;
	};

	for (let i = 0; i < maxCountOfCols(); i += 1) {
		lines.push(
			<HorizontalLine
				oneDayIndent={oneDayIndent}
				key={i}
				days={days}
				festivalsForSelectedMonth={buildFestArrays()[i]}
				extractFest={extractFest}
			/>
		);
	}

	return lines.length ? (
		<div className='one-line' style={monthBackground}>
			<div className='month-name' style={monthText}>
				{monthIndexToName(monthNumber)}
			</div>
			<div className='month-content' style={lineWrapper}>
				{lines}
			</div>
		</div>
	) : null;
}

OneLine.propTypes = {
	numberOfMonthsInLine: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	monthNumber: PropTypes.number.isRequired,
	extractFest: PropTypes.func.isRequired,
	festivalsForSelectedMonth: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequried,
			name: PropTypes.string.isRequried,
			description: PropTypes.string.isRequried,
			date: PropTypes.instanceOf(Date),
		})
	).isRequired,
};

export default OneLine;
