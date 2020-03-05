import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputColor(props) {
	const { handleColorChange, customColorValue } = props;

	const [colorValue, setColorValue] = useState(customColorValue);

	const handleOnChange = e => {
		setColorValue(e.target.value);
		handleColorChange(e.target.value);
	};

	return <input type='color' onChange={handleOnChange} value={colorValue} />;
}

InputColor.propTypes = {
	handleColorChange: PropTypes.func.isRequired,
	customColorValue: PropTypes.string,
};

InputColor.defaultProps = {
	customColorValue: '#00000',
};

export default InputColor;
