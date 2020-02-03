import React from 'react';
import { shallow } from 'enzyme';
import ListOfSocialNetworks from '../../../components/FestPanel/ListOfSocialNetworks';

describe('test ListOfSocialNetworks component', () => {
	it('correct pass props to the ListOfSocialNetworks component', () => {
		const socialNetworks = [
			{
				id: 1,
				name: 'Facebook',
				link: 'https://www.facebook.com/atlasweekend',
			},
			{
				id: 2,
				name: 'Instagram',
				link: 'https://www.instagram.com/atlasweekend',
			},
		];

		const wrapper = shallow(
			<ListOfSocialNetworks socialNetworks={socialNetworks} />
		);
		expect(wrapper.find('.social-networks li')).toHaveLength(2);
	});
});
