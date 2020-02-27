import React from 'react';
import { shallow } from 'enzyme';
import ListOfArtists from '../../../components/FestPanel/ListOfArtists';

describe('test ListOfArtists component', () => {
	it('correct pass props to the ListOfArtists component', () => {
		const arrayOfArtists = [
			{
				_id: '4',
				name: 'Test Artist',
				photo:
					'https://youngcompany.com/wp-content/uploads/2013/07/invisible-website.png',
				youtube:
					'https://www.youtube.com/watch?v=gGdGFtwCNBE&list=RDgGdGFtwCNBE',
			},
			{
				_id: '5',
				name: 'Test Artist 2',
				photo:
					'https://youngcompany.com/wp-content/uploads/2013/07/invisible-website.png',
				youtube:
					'https://www.youtube.com/watch?v=gGdGFtwCNBE&list=RDgGdGFtwCNBE',
			},
		];
		const title = 'Test Title';
		const justifyContent = 'space-around';
		const cardWidth = 200;
		const imageHeight = 250;

		const expectedStyles = {
			display: 'flex',
			flexFlow: 'row wrap',
			justifyContent: 'space-around',
		};

		const wrapper = shallow(
			<ListOfArtists
				arrayOfArtists={arrayOfArtists}
				title={title}
				justifyContent={justifyContent}
				cardWidth={cardWidth}
				imageHeight={imageHeight}
			/>
		);

		expect(wrapper.find('.list-of-artists .title').text()).toEqual(
			'Test Title'
		);
		expect(wrapper.find('.list-of-artists .artists').props().style).toEqual(
			expectedStyles
		);
		expect(wrapper.find('.list-of-artists .artists .artist')).toHaveLength(2);
	});
});
