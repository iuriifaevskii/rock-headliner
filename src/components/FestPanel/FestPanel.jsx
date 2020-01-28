import React from 'react';
import PropTypes from 'prop-types';

function FestPanel(props) {
	const { name, description, startDate, endDate } = props;
	return (
		<div className='fest-panel'>
			<p>{name}</p>
			<p>{description}</p>
			<p>
				{startDate} - {endDate}
			</p>
		</div>
	);
}

FestPanel.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
};

export default FestPanel;
