import React from 'react';
import PropTypes from 'prop-types';

import ListOfArtists from './ListOfArtists';
import ListOfSocialNetworks from './ListOfSocialNetworks';
import { Link } from '../common';

function FestPanel(props) {
	const {
		name,
		description,
		startDate,
		endDate,
		banner,
		site,
		ticket,
		headliners,
		artistsExceptForHeadliners,
		socialNetworks,
	} = props;

	const textHeader = {
		color: '#ffffff',
		fontFamily: 'Lato, sans-serif',
		fontSize: '54px',
		fontWeight: 300,
		margin: 0,
	};

	const textArticle = {
		color: '#adb7bd',
		fontFamily: 'Lucida Sans, Arial, sans-serif',
		fontSize: '16px',
		lineHeight: '26px',
		textIndent: '30px',
		margin: 0,
	};

	const textDate = {
		background: '#fe921f',
		color: '#ffffff',
		display: 'inline-block',
		fontFamily: 'Lato, sans-serif',
		fontSize: '12px',
		fontWeight: 'bold',
		lineHeight: '12px',
		letterSpacing: '1px',
		textTransform: 'uppercase',
	};

	const imageBanner = {
		width: '100%',
		maxWidth: '400px',
		height: 'auto',
	};

	return (
		<article className='fest-panel'>
			<h2 style={textHeader}>{name}</h2>
			<div className='site-link'>
				<Link href={site} text={site} />
			</div>
			<p className='date-range' style={textDate}>
				{startDate} - {endDate}
			</p>
			<div>
				<img style={imageBanner} alt={name} src={banner} />
			</div>
			<div>
				<Link href={ticket} text='Buy Tickets' />
			</div>
			<p className='description' style={textArticle}>
				{description}
			</p>
			<ListOfSocialNetworks socialNetworks={socialNetworks} />
			<ListOfArtists arrayOfArtists={headliners} title='Headliners' />
			<ListOfArtists
				cardWidth={130}
				imageHeight={180}
				arrayOfArtists={artistsExceptForHeadliners}
				justifyContent='center'
				title='Other Artists'
			/>
		</article>
	);
}

FestPanel.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	banner: PropTypes.string.isRequired,
	site: PropTypes.string.isRequired,
	ticket: PropTypes.string.isRequired,
	headliners: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequried,
			name: PropTypes.string.isRequried,
			photo: PropTypes.string.isRequried,
			youtube: PropTypes.string.isRequried,
		})
	).isRequired,
	artistsExceptForHeadliners: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequried,
			name: PropTypes.string.isRequried,
			photo: PropTypes.string.isRequried,
			youtube: PropTypes.string.isRequried,
		})
	).isRequired,
	socialNetworks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequried,
			name: PropTypes.string.isRequried,
			link: PropTypes.string.isRequried,
		})
	).isRequired,
};

export default FestPanel;
