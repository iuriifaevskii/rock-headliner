import React from 'react';
import PropTypes from 'prop-types';

import LineOfMonths from './LineOfMonths';

function TimeLine(props) {
	const { numberOfMonthsInLine, festivals, width, extractFest } = props;

	const numberOfMonths = 12;
	const numberOfColumns = numberOfMonths / numberOfMonthsInLine;
	const table = [];

	const lineOfMonthsWrapper = {
		display: 'flex',
		width,
	};

	for (let i = 0; i < numberOfColumns; i += 1) {
		table.push(
			<div style={lineOfMonthsWrapper} key={i}>
				<LineOfMonths
					width={width}
					colNumber={i + 1}
					festivals={festivals}
					numberOfMonthsInLine={numberOfMonthsInLine}
					extractFest={extractFest}
				/>
			</div>
		);
	}
	return table;
}

TimeLine.propTypes = {
	numberOfMonthsInLine: PropTypes.oneOf(1, 2, 3).number,
	festivals: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequried,
			name: PropTypes.string.isRequried,
			startDate: PropTypes.string.isRequried,
			endDate: PropTypes.string.isRequried,
		})
	).isRequired,
	width: PropTypes.oneOf(700, 800, 900, 1000).number,
	extractFest: PropTypes.func.isRequired,
};

export default TimeLine;
