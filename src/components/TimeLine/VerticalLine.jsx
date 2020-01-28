import React, { useState } from 'react';
import PropTypes from 'prop-types';

function VerticalLine(props) {
	const { oneDayIndent, day, pointedDay, extractFest } = props;

	const [transform, setTransform] = useState('scale(1)');
	const [zIndex, setZIndex] = useState(pointedDay ? 100 : 1);

	const lineWrapper = {
		position: 'absolute',
		background: pointedDay ? pointedDay.background : '#000000',
		width: pointedDay ? `${pointedDay.scale}px` : '4px',
		height: pointedDay ? `${pointedDay.scale}px` : '7px',
		borderRadius: pointedDay ? '50%' : 0,
		left: 0 + oneDayIndent * day,
		fontSize: '6px',
		fontWeight: 500,
		zIndex,
		border: pointedDay ? '1px solid white' : 0,
		transform,
	};

	const handleMouseEnter = () => {
		if (pointedDay) {
			setTransform('scale(1.4, 1.6)');
			setZIndex(101);
		}
	};

	const handleMouseLeave = () => {
		if (pointedDay) {
			setTransform('scale(1)');
			setZIndex(100);
		}
	};

	const handleClick = () => {
		if (pointedDay) {
			extractFest(pointedDay.name);
		}
	};

	return (
		<div
			className={`vertical-line ${pointedDay ? 'pointed-day' : null}`}
			onClick={handleClick}
			onKeyDown={handleClick}
			style={{ ...lineWrapper, transform, zIndex }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			role='button'
			tabIndex='0'
		>
			{pointedDay ? day + 1 : null}
		</div>
	);
}

VerticalLine.propTypes = {
	oneDayIndent: PropTypes.number.isRequired,
	day: PropTypes.number.isRequired,
	pointedDay: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		scale: PropTypes.number,
		background: PropTypes.string,
		date: PropTypes.instanceOf(Date),
	}),
	extractFest: PropTypes.func.isRequired,
};

VerticalLine.defaultProps = {
	pointedDay: null,
};

export default VerticalLine;
