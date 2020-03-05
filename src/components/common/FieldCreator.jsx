import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

function FieldCreator(props) {
	const { customArray, rowNames, handleFieldCreatorChange } = props;

	const [rows, setRows] = useState(customArray);

	useEffect(() => {
		handleFieldCreatorChange(customArray);
	}, []);

	const addRow = () => {
		let row = {};
		rowNames.forEach(itemKey => {
			row[itemKey] = '';
			row = { ...row, _id: `created_${Math.random()}` };
		});
		setRows([...rows, row]);
		handleFieldCreatorChange([...rows, row]);
	};

	const removeRow = rowId => {
		const arrayCopy = rows.filter(row => {
			const { _id } = row;
			return _id !== rowId;
		});
		setRows(arrayCopy);
		handleFieldCreatorChange(arrayCopy);
	};

	const handleInputChange = (inputValue, name) => {
		const changedRows = rows.map(row => {
			const { _id } = row;
			const newRow = { ...row };
			if (_id === name.split('-').pop()) {
				const rowKey = name.split('-').shift();
				newRow[rowKey] = inputValue;
			}
			return newRow;
		});
		setRows(changedRows);
		handleFieldCreatorChange(changedRows);
	};

	const createRow = row => {
		const { _id } = row;
		const controls = [];
		Object.entries(row).forEach(([prop, value]) => {
			if (prop !== '_id') {
				const control = (
					<InputText
						key={prop}
						customTextValue={value}
						handleInputChange={handleInputChange}
						name={`${prop}-${_id}`}
					/>
				);
				controls.push(control);
			}
		});
		return <div>{controls}</div>;
	};

	return (
		<section>
			{rows.length ? (
				rows.map(row => {
					const { _id } = row;
					return (
						<div key={_id}>
							{createRow(row)}
							<button type='button' onClick={() => removeRow(_id)}>
								remove
							</button>
						</div>
					);
				})
			) : (
				<div />
			)}
			<div
				role='button'
				tabIndex='0'
				onKeyDown={() => addRow()}
				type='button'
				onClick={() => addRow()}
			>
				+
			</div>
		</section>
	);
}

FieldCreator.propTypes = {
	rowNames: PropTypes.arrayOf(PropTypes.string).isRequired,
	customArray: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleFieldCreatorChange: PropTypes.func.isRequired,
};

FieldCreator.defaultProps = {};

export default FieldCreator;
