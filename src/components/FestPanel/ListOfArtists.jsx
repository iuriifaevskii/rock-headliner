import React from 'react';
import PropTypes from 'prop-types';

import Artist from './Artist';

function ListOfArtists(props) {
	const {
		arrayOfArtists,
		title,
		justifyContent,
		cardWidth,
		imageHeight,
	} = props;

	const listContainer = {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent,
	};

	return (
		<section className='list-of-artists'>
			<h3 className='title'>{title}</h3>
			<div className='artists' style={listContainer}>
				{arrayOfArtists.map(artist => {
					const { _id, name, photo, youtube } = artist;
					return (
						<Artist
							className='artist'
							cardWidth={cardWidth}
							imageHeight={imageHeight}
							key={_id}
							name={name}
							photo={photo}
							youtube={youtube}
						/>
					);
				})}
			</div>
		</section>
	);
}

ListOfArtists.propTypes = {
	title: PropTypes.string.isRequired,
	arrayOfArtists: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequried,
			name: PropTypes.string.isRequried,
			photo: PropTypes.string.isRequried,
			youtube: PropTypes.string.isRequried,
		})
	).isRequired,
	justifyContent: PropTypes.oneOf(['center', 'space-around']),
	cardWidth: PropTypes.oneOf([130, 200]),
	imageHeight: PropTypes.oneOf([180, 250]),
};

ListOfArtists.defaultProps = {
	justifyContent: 'space-around',
	cardWidth: 200,
	imageHeight: 250,
};

export default ListOfArtists;
