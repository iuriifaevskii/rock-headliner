import React from 'react';
import { shallow } from 'enzyme';
import FestPanel from '../../../components/FestPanel/FestPanel';

describe('test FestPanel component', () => {
	it('correct pass props to the FestPanel component', () => {
		const name = 'Atlas Weekend';
		const description = 'Lorem ipsum dolor sit amet';
		const startDate = '08/08/2020';
		const endDate = '08/12/2020';
		const banner =
			'https://mesta.com.ua/wp-content/uploads/2020/01/AtlasWeekend2020Artwork.jpg';
		const site = 'https://atlasweekend.com';
		const ticket = 'https://atlasweekend.com/tickets';
		const headliners = [
			{
				_id: '1',
				name: 'Asap Rocky',
				photo:
					'https://www.gstatic.com/tv/thumb/persons/673344/673344_v9_bb.jpg',
				youtube: 'https://www.youtube.com/watch?v=Kbj2Zss-5GY',
			},
		];
		const artistsExceptForHeadliners = [
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
		const socialNetworks = [
			{
				_id: '1',
				name: 'Facebook',
				link: 'https://www.facebook.com/atlasweekend',
			},
			{
				_id: '2',
				name: 'Instagram',
				link: 'https://www.instagram.com/atlasweekend',
			},
		];

		const wrapper = shallow(
			<FestPanel
				name={name}
				description={description}
				startDate={startDate}
				endDate={endDate}
				banner={banner}
				site={site}
				ticket={ticket}
				headliners={headliners}
				artistsExceptForHeadliners={artistsExceptForHeadliners}
				socialNetworks={socialNetworks}
			/>
		);
		expect(wrapper.find('.fest-panel h2').text()).toEqual('Atlas Weekend');
		expect(wrapper.find('.fest-panel .date-range').text()).toEqual(
			'08/08/2020 - 08/12/2020'
		);
		expect(wrapper.find('.fest-panel img').props().src).toEqual(
			'https://mesta.com.ua/wp-content/uploads/2020/01/AtlasWeekend2020Artwork.jpg'
		);
		expect(wrapper.find('.fest-panel .description').text()).toEqual(
			'Lorem ipsum dolor sit amet'
		);
	});
});
