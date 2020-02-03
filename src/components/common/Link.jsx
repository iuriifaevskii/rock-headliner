import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Link(props) {
	const { href, text, openInNewTab, fontSize } = props;

	const [textDecoration, setTextDecoration] = useState('underline');
	const [cursor, setCursor] = useState('default');

	const linkText = {
		color: '#fe921f',
		fontSize: `${fontSize}px`,
		cursor,
		textDecoration,
	};

	const handleMouseLeave = () => {
		setCursor('default');
		setTextDecoration('underline');
	};

	const handleMouseEnter = () => {
		setCursor('pointer');
		setTextDecoration('none');
	};

	return (
		<a
			className='link'
			style={linkText}
			href={href}
			target={openInNewTab ? '_blank' : null}
			rel={openInNewTab ? 'noopener noreferrer' : null}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{text}
		</a>
	);
}

Link.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	openInNewTab: PropTypes.bool,
	fontSize: PropTypes.number,
};

Link.defaultProps = {
	openInNewTab: true,
	fontSize: 20,
};

export default Link;
