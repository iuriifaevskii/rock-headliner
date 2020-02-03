import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Artist(props) {
	const { name, photo, youtube, cardWidth, imageHeight } = props;

	const [opacity, setOpacity] = useState(0.8);
	const [boxShadowCoefficient, setBoxShadowCoefficient] = useState(1);
	const [cursor, setCursor] = useState('default');

	const card = {
		width: `${cardWidth}px`,
		background: `rgba(254, 146, 31, ${opacity})`,
		boxShadow: `0 ${4 * boxShadowCoefficient}px ${8 *
			boxShadowCoefficient}px 0 rgba(0, 0, 0, 0.2)`,
		transition: '0.3s',
		cursor,
	};

	const container = {
		padding: '2px 16px',
	};

	const bgImageCenter = {
		height: `${imageHeight}px`,
		width: '100%',
		backgroundImage: `url(${photo})`,
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
	};

	const handleMouseLeave = () => {
		setOpacity(0.8);
		setBoxShadowCoefficient(1);
		setCursor('default');
	};

	const handleMouseEnter = () => {
		setOpacity(1);
		setBoxShadowCoefficient(3);
		setCursor('pointer');
	};

	const handleClick = () => window.open(youtube, '_blank');

	return (
		<div
			className='card'
			style={card}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			onKeyDown={handleClick}
			role='button'
			tabIndex='0'
		>
			<div className='card-img' style={bgImageCenter} />
			<div style={container}>
				<h4 className='card-text'>{name}</h4>
			</div>
		</div>
	);
}

Artist.propTypes = {
	name: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	youtube: PropTypes.string.isRequired,
	cardWidth: PropTypes.oneOf([130, 200]),
	imageHeight: PropTypes.oneOf([180, 250]),
};

Artist.defaultProps = {
	cardWidth: 200,
	imageHeight: 250,
};

export default Artist;
