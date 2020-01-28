import React from 'react';
import { shallow } from 'enzyme';
import HorizontalLine from '../../../components/TimeLine/HorizontalLine';
import VerticalLine from '../../../components/TimeLine/VerticalLine';

describe('test HorizontalLine component', () => {
	it('correct pass props to the HorizontalLine component', () => {
		const festivalsForSelectedMonth = [
			{
				id: 3,
				name: "Open'er Festival",
				description: 'description',
				date: new Date('08/01/2020'),
				scale: 10,
				background: '#ffa500fa',
			},
			{
				id: 3,
				name: "Open'er Festival",
				description: 'description',
				date: new Date('08/02/2020'),
				scale: 10,
				background: '#ffa500fa',
			},
			{
				id: 3,
				name: "Open'er Festival",
				description: 'description',
				date: new Date('08/03/2020'),
				scale: 10,
				background: '#ffa500fa',
			},
			{
				id: 1,
				name: 'Atlas Weekend',
				description: 'description',
				date: new Date('08/08/2020'),
				scale: 7,
				background: '#0000ff',
			},
			{
				id: 1,
				name: 'Atlas Weekend',
				description: 'description',
				date: new Date('08/09/2020'),
				scale: 7,
				background: '#0000ff',
			},
		];
		const expectedStyles = {
			height: '2px',
			width: '100%',
			background: 'black',
			marginTop: 14,
		};
		const days = 31;
		const oneDayIndent = 10;
		const extractFest = jest.fn();
		const wrapper = shallow(
			<HorizontalLine
				festivalsForSelectedMonth={festivalsForSelectedMonth}
				days={days}
				oneDayIndent={oneDayIndent}
				extractFest={extractFest}
			/>
		);
		const containerStyle = wrapper.get(0).props.style;
		expect(containerStyle).toHaveProperty('height', expectedStyles.height);
		expect(containerStyle).toHaveProperty('width', expectedStyles.width);
		expect(containerStyle).toHaveProperty(
			'background',
			expectedStyles.background
		);
		expect(containerStyle).toHaveProperty(
			'marginTop',
			expectedStyles.marginTop
		);

		expect(wrapper.find(VerticalLine)).toHaveLength(31);
	});
});
