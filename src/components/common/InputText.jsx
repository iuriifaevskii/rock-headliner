import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputText(props) {
	const { handleInputChange, customTextValue, isTextArea, name } = props;

	const [inputValue, setInputValue] = useState(customTextValue);

	const handleOnChange = e => {
		setInputValue(e.target.value);
		handleInputChange(e.target.value, name);
	};

	return isTextArea ? (
		<textarea onChange={handleOnChange} value={inputValue} />
	) : (
		<input onChange={handleOnChange} value={inputValue} />
	);
}

InputText.propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	customTextValue: PropTypes.string,
	isTextArea: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

InputText.defaultProps = {
	customTextValue: '',
	isTextArea: false,
};

export default InputText;
