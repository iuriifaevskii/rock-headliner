import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputScale(props) {
	const { customScaleValue, handleScaleChange } = props;

	const [scaleValue, setScaleValue] = useState(customScaleValue);

	const lines = [];

	const selectedScale = {
		background: 'red',
	};

	const handleClick = value => {
		setScaleValue(value);
		handleScaleChange(value);
	};

	for (let i = 0; i < 10; i += 1) {
		lines.push(
			<div
				style={
					(scaleValue || customScaleValue) === i + 1 ? selectedScale : null
				}
				key={i}
				onClick={() => handleClick(i + 1)}
				onKeyDown={() => handleClick(i + 1)}
				role='button'
				tabIndex='0'
			>
				{i + 1}
			</div>
		);
	}

	return <div>{lines}</div>;
}

InputScale.propTypes = {
	handleScaleChange: PropTypes.func.isRequired,
	customScaleValue: PropTypes.number,
};

InputScale.defaultProps = {
	customScaleValue: 2,
};

export default InputScale;
