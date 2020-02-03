import React from 'react';
import { shallow } from 'enzyme';
import Artist from '../../../components/FestPanel/Artist';

describe('test Artist component', () => {
	it('correct pass props to the Artist component', () => {
		global.open = jest.fn();
		const name = 'card test text';
		const photo =
			'https://atlasweekend.com/storage/uploads/poster/G8KFlQR2YiU1S9EbVGdIR2qwVftUY0CvnbByjZOQ.png';
		const youtube =
			'https://www.youtube.com/watch?v=gGdGFtwCNBE&list=RDgGdGFtwCNBE';
		const cardWidth = 200;
		const imageHeight = 250;

		const expectedCardStyles = {
			width: '200px',
			background: 'rgba(254, 146, 31, 1)',
			boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.2)',
			transition: '0.3s',
			cursor: 'pointer',
		};

		const expectedBgImageCenterStyle = {
			height: '250px',
			width: '100%',
			backgroundImage:
				'url(https://atlasweekend.com/storage/uploads/poster/G8KFlQR2YiU1S9EbVGdIR2qwVftUY0CvnbByjZOQ.png)',
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
		};
		const wrapper = shallow(
			<Artist
				name={name}
				photo={photo}
				youtube={youtube}
				cardWidth={cardWidth}
				imageHeight={imageHeight}
			/>
		);

		expect(wrapper.find('.card-text').text()).toEqual('card test text');
		expect(wrapper.find('.card-img').props().style).toEqual(
			expectedBgImageCenterStyle
		);

		wrapper.simulate('mouseenter');
		expect(wrapper.find('.card').props().style).toEqual(expectedCardStyles);

		wrapper.simulate('mouseleave');
		expectedCardStyles.background = 'rgba(254, 146, 31, 0.8)';
		expectedCardStyles.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
		expectedCardStyles.cursor = 'default';
		expect(wrapper.find('.card').props().style).toEqual(expectedCardStyles);

		wrapper.simulate('click');
		expect(global.open).toBeCalled();
		delete global.open;
	});
});
