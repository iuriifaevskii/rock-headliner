import React from 'react';
import PropTypes from 'prop-types';

import VerticalLine from './VerticalLine';

function HorizontalLine(props) {
	const { festivalsForSelectedMonth, days, oneDayIndent, extractFest } = props;

	const verticalLines = [];

	const blackLine = {
		height: '2px',
		width: '100%',
		background: 'black',
		marginTop: 14,
	};

	const verticalLineWrapper = {
		position: 'relative',
	};

	for (let i = 0; i < days; i += 1) {
		verticalLines.push(
			<VerticalLine
				key={i}
				day={i}
				oneDayIndent={oneDayIndent}
				pointedDay={festivalsForSelectedMonth.find(
					item => i + 1 === item.date.getDate()
				)}
				extractFest={extractFest}
			/>
		);
	}

	return (
		<div className='horizontal-line' style={blackLine}>
			<div style={verticalLineWrapper}>{verticalLines}</div>
		</div>
	);
}

HorizontalLine.propTypes = {
	extractFest: PropTypes.func.isRequired,
	festivalsForSelectedMonth: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequried,
			name: PropTypes.string.isRequried,
			description: PropTypes.string.isRequried,
			date: PropTypes.instanceOf(Date),
		})
	).isRequired,
	days: PropTypes.number.isRequired,
	oneDayIndent: PropTypes.number.isRequired,
};

export default HorizontalLine;
