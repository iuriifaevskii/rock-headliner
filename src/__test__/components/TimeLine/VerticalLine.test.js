import React from 'react';
import { shallow } from 'enzyme';
import VerticalLine from '../../../components/TimeLine/VerticalLine';

describe('test VerticalLine component', () => {
	const extractFest = jest.fn();
	const oneDayIndent = 10;
	const day = 4;

	it('correct pass props to the VerticalLine component if it has not pointedDay object', () => {
		const pointedDay = null;
		const wrapper = shallow(
			<VerticalLine
				extractFest={extractFest}
				oneDayIndent={oneDayIndent}
				day={day}
				pointedDay={pointedDay}
			/>
		);

		const expectedStyles = {
			position: 'absolute',
			background: '#000000',
			width: '4px',
			height: '7px',
			borderRadius: 0,
			left: 40,
			fontSize: '6px',
			fontWeight: 500,
			zIndex: 1,
			border: 0,
			transform: 'scale(1)',
			cursor: 'default',
		};
		wrapper.simulate('mouseenter');
		wrapper.simulate('click');
		wrapper.simulate('mouseleave');
		expect(wrapper.find('.vertical-line').props().style).toEqual(
			expectedStyles
		);
	});

	it('correct pass props to the VerticalLine component if it has pointedDay object', () => {
		const pointedDay = {
			_id: '8',
			name: 'Test Festival',
			description: 'description',
			date: new Date('10/10/2020'),
			scale: 8,
			background: '#026f00fa',
		};
		const wrapper = shallow(
			<VerticalLine
				extractFest={extractFest}
				oneDayIndent={oneDayIndent}
				day={day}
				pointedDay={pointedDay}
			/>
		);
		const expectedStyles = {
			position: 'absolute',
			background: '#026f00fa',
			width: '8px',
			height: '8px',
			borderRadius: '50%',
			left: 40,
			fontSize: '6px',
			fontWeight: 500,
			zIndex: 100,
			border: '1px solid white',
			transform: 'scale(1)',
			cursor: 'default',
		};
		expect(wrapper.find('.vertical-line').text()).toEqual('5');
		expect(wrapper.find('.vertical-line').props().style).toEqual(
			expectedStyles
		);
	});

	it('correct pass props to the VerticalLine component if it has pointedDay object and lounch handleMouseEnter + handleClick. After lounch handleMouseLeave', () => {
		const pointedDay = {
			_id: '8',
			name: 'Test Festival',
			description: 'description',
			date: new Date('10/10/2020'),
			scale: 8,
			background: '#026f00fa',
		};
		const wrapper = shallow(
			<VerticalLine
				extractFest={extractFest}
				oneDayIndent={oneDayIndent}
				day={day}
				pointedDay={pointedDay}
			/>
		);
		const expectedStyles = {
			position: 'absolute',
			background: '#026f00fa',
			width: '8px',
			height: '8px',
			borderRadius: '50%',
			left: 40,
			fontSize: '6px',
			fontWeight: 500,
			zIndex: 101,
			border: '1px solid white',
			transform: 'scale(1.4, 1.6)',
			cursor: 'pointer',
		};
		wrapper.simulate('mouseenter');
		wrapper.simulate('click');
		expect(wrapper.find('.vertical-line').props().style).toEqual(
			expectedStyles
		);

		wrapper.simulate('mouseleave');
		expectedStyles.transform = 'scale(1)';
		expectedStyles.cursor = 'default';
		expectedStyles.zIndex = 100;
		expect(wrapper.find('.vertical-line').props().style).toEqual(
			expectedStyles
		);
	});
});
