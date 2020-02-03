import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../common';

function ListOfSocialNetworks(props) {
	const { socialNetworks } = props;

	const textArticle = {
		color: '#adb7bd',
		fontFamily: 'Lucida Sans, Arial, sans-serif',
		fontSize: '16px',
		lineHeight: '26px',
		textIndent: '30px',
		margin: 0,
	};

	const socialNetwork = {
		listStyleType: 'none',
		padding: 0,
		margin: 0,
		display: 'flex',
		alignItems: 'center',
		textIndent: 0,
		justifyContent: 'space-around',
	};

	return (
		<ul
			className='social-networks'
			style={{ ...textArticle, ...socialNetwork }}
		>
			{socialNetworks.map(item => (
				<li key={item.id}>
					<Link href={item.link} text={item.name} />
				</li>
			))}
		</ul>
	);
}

ListOfSocialNetworks.propTypes = {
	socialNetworks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequried,
			name: PropTypes.string.isRequried,
			link: PropTypes.string.isRequried,
		})
	).isRequired,
};

export default ListOfSocialNetworks;
