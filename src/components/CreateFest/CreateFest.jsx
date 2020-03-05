import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputText, InputScale, InputColor, FieldCreator } from '../common';

function CreateFest(props) {
	const {
		name,
		customNameValue,
		customDescriptionValue,
		customStartDateValue,
		customEndDateValue,
		customScaleValue,
		customBackgroundValue,
		customTicketValue,
		customSiteValue,
		customBannerValue,
		// customArtistIDsValues,
		customSocialNetworksValues,
	} = props;

	const [customName, setCustomNameValue] = useState(customNameValue);
	const [customDescription, setCustomDescriptionValue] = useState(
		customDescriptionValue
	);
	const [customStartDate, setCustomStartDateValue] = useState(
		customStartDateValue
	);
	const [customEndDate, setCustomEndDateValue] = useState(customEndDateValue);
	const [customScale, setCustomScaleValue] = useState(customScaleValue);
	const [customBackground, setCustomBackgroundValue] = useState(
		customBackgroundValue
	);
	const [customTicket, setCustomTicketValue] = useState(customTicketValue);
	const [customSite, setCustomSiteValue] = useState(customSiteValue);
	const [customBanner, setCustomBannerValue] = useState(customBannerValue);
	const [socialNetworks, setCustomSocialNetworks] = useState(
		customSocialNetworksValues
	);
	const textHeader = {
		color: '#ffffff',
		fontFamily: 'Lato, sans-serif',
		fontSize: '54px',
		fontWeight: 300,
		margin: 0,
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log({
			customName,
			customDescription,
			customStartDate,
			customEndDate,
			customScale,
			customBackground,
			customTicket,
			customSite,
			customBanner,
			socialNetworks,
		});
	};

	const handleNameChange = inputValue => setCustomNameValue(inputValue);
	const handleDescriptionChange = inputValue =>
		setCustomDescriptionValue(inputValue);
	const handleStartDateChange = inputValue =>
		setCustomStartDateValue(inputValue);
	const handleEndDateChange = inputValue => setCustomEndDateValue(inputValue);
	const handleScaleChange = inputValue => setCustomScaleValue(inputValue);
	const handleBackgroundChange = inputValue =>
		setCustomBackgroundValue(inputValue);
	const handleTicketChange = inputValue => setCustomTicketValue(inputValue);
	const handleSiteChange = inputValue => setCustomSiteValue(inputValue);
	const handleBannerChange = inputValue => setCustomBannerValue(inputValue);
	const handleSocialNetworksChange = array => {
		setCustomSocialNetworks(array);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2 style={textHeader}>{name}</h2>
			<div>
				<InputText
					customTextValue={customNameValue}
					handleInputChange={handleNameChange}
					name='name'
				/>
			</div>
			<div>
				<InputText
					customTextValue={customDescriptionValue}
					handleInputChange={handleDescriptionChange}
					isTextArea
					name='description'
				/>
			</div>
			<div>
				<InputText
					customTextValue={customStartDateValue}
					handleInputChange={handleStartDateChange}
					name='startDate'
				/>
			</div>
			<div>
				<InputText
					customTextValue={customEndDateValue}
					handleInputChange={handleEndDateChange}
					name='endDate'
				/>
			</div>
			<div>
				<InputScale
					customScaleValue={customScaleValue}
					handleScaleChange={handleScaleChange}
					name='scale'
				/>
			</div>
			<div>
				<InputColor
					customColorValue={customBackgroundValue}
					handleColorChange={handleBackgroundChange}
					name='background'
				/>
			</div>
			<div>
				<InputText
					customTextValue={customTicketValue}
					handleInputChange={handleTicketChange}
					name='ticket'
				/>
			</div>
			<div>
				<InputText
					customTextValue={customSiteValue}
					handleInputChange={handleSiteChange}
					name='site'
				/>
			</div>
			<div>
				<InputText
					customTextValue={customBannerValue}
					handleInputChange={handleBannerChange}
					name='banner'
				/>
			</div>
			<div>
				<FieldCreator
					customArray={[
						{
							_id: '5e4af194a9f9ff1d7c2f056a',
							name: 'Facebook',
							link: 'https://wwwFacebook',
						},
						{
							_id: '5e4af194a9f9ff1d7c2f056b',
							name: 'Instagram',
							link: 'https://wwwInstagram',
						},
					]}
					rowNames={['name', 'link']}
					handleFieldCreatorChange={handleSocialNetworksChange}
				/>
			</div>
			<div>
				<input type='submit' value='create' />
			</div>
		</form>
	);
}

CreateFest.propTypes = {
	name: PropTypes.string.isRequired,
	customNameValue: PropTypes.string,
	customDescriptionValue: PropTypes.string,
	customStartDateValue: PropTypes.string,
	customEndDateValue: PropTypes.string,
	customScaleValue: PropTypes.number,
	customBackgroundValue: PropTypes.string,
	customTicketValue: PropTypes.string,
	customSiteValue: PropTypes.string,
	customBannerValue: PropTypes.string,
	customSocialNetworksValues: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequried,
			name: PropTypes.string.isRequried,
			link: PropTypes.string.isRequried,
		})
	),
};

CreateFest.defaultProps = {
	customNameValue: '',
	customDescriptionValue: '',
	customStartDateValue: '08/08/2020',
	customEndDateValue: '08/12/2020',
	customScaleValue: 1,
	customBackgroundValue: '#000000',
	customTicketValue: '',
	customSiteValue: '',
	customBannerValue: '',
	customSocialNetworksValues: [],
};

export default CreateFest;
