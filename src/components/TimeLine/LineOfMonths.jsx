import React from 'react';
import PropTypes from 'prop-types';
import OneLine from './OneLine';

import { dateRangeArray } from '../../utils/dateManipulations';

function LineOfMonths(props) {
	const {
		numberOfMonthsInLine,
		festivals,
		colNumber,
		width,
		extractFest,
	} = props;

	const lines = [];

	for (let i = 0; i < numberOfMonthsInLine; i += 1) {
		const colMonthIndex = i + 1;
		const monthNumber = numberOfMonthsInLine * (colNumber - 1) + colMonthIndex;

		const getFestivals = () => {
			const fullFestivalsArray = [];
			festivals.forEach(item => {
				const startDate = new Date(item.startDate);
				const endDate = new Date(item.endDate);
				const festivalsWithDay = dateRangeArray(startDate, endDate).map(
					date => {
						return {
							id: item.id,
							name: item.name,
							description: item.description,
							date,
							scale: item.scale,
							background: item.background,
						};
					}
				);
				fullFestivalsArray.push(...festivalsWithDay);
			});
			return fullFestivalsArray;
		};

		const festivalsForSelectedMonth = () => {
			return getFestivals().filter(
				item => item.date.getMonth() === monthNumber - 1
			);
		};

		lines.push(
			<OneLine
				width={width}
				numberOfMonthsInLine={numberOfMonthsInLine}
				festivalsForSelectedMonth={festivalsForSelectedMonth()}
				key={i}
				monthNumber={monthNumber}
				extractFest={extractFest}
			/>
		);
	}

	return lines;
}

LineOfMonths.propTypes = {
	numberOfMonthsInLine: PropTypes.number.isRequired,
	festivals: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequried,
			name: PropTypes.string.isRequried,
			startDate: PropTypes.string.isRequried,
			endDate: PropTypes.string.isRequried,
		})
	).isRequired,
	colNumber: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	extractFest: PropTypes.func.isRequired,
};

export default LineOfMonths;
