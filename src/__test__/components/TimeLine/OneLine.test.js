import React from 'react';
import { shallow } from 'enzyme';
import OneLine from '../../../components/TimeLine/OneLine';
import HorizontalLine from '../../../components/TimeLine/HorizontalLine';

describe('test OneLine component', () => {
	it('correct pass props to the OneLine component if festivalsForSelectedMonth.length (lines.length) > 0', () => {
		const width = 900;
		const numberOfMonthsInLine = 3;
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
		const monthNumber = 8;
		const extractFest = jest.fn();

		const expectedLineWrapper = {
			width: '300px',
			minHeight: 40,
			borderRadius: '5px',
			padding: '0px 0px 5px 0px',
			backgroundSize: '300px 50px',
		};

		const expectedMonthBackground = {
			backgroundColor: '#c23b3b',
			backgroundImage:
				'linear-gradient(90deg, transparent 30%, rgba(255,255,255,.5) 70%)',
			borderRadius: '4px',
			margin: '3px',
			border: '1px solid #ffffff',
		};

		const wrapper = shallow(
			<OneLine
				width={width}
				numberOfMonthsInLine={numberOfMonthsInLine}
				festivalsForSelectedMonth={festivalsForSelectedMonth}
				monthNumber={monthNumber}
				extractFest={extractFest}
			/>
		);
		const containerStyle = wrapper.get(0).props.style;
		expect(containerStyle).toHaveProperty(
			'backgroundColor',
			expectedMonthBackground.backgroundColor
		);
		expect(containerStyle).toHaveProperty(
			'backgroundImage',
			expectedMonthBackground.backgroundImage
		);
		expect(containerStyle).toHaveProperty(
			'borderRadius',
			expectedMonthBackground.borderRadius
		);
		expect(wrapper.find(HorizontalLine)).toHaveLength(1);
		const lineWrapper = wrapper.find('.month-content').props().style;

		expect(lineWrapper).toHaveProperty('width', expectedLineWrapper.width);
		expect(lineWrapper).toHaveProperty(
			'backgroundSize',
			expectedLineWrapper.backgroundSize
		);
	});

	it('correct pass props to the OneLine component if festivalsForSelectedMonth.length (lines.length) = 0', () => {
		const width = 900;
		const numberOfMonthsInLine = 3;
		const festivalsForSelectedMonth = [];
		const monthNumber = 8;
		const extractFest = jest.fn();
		const wrapper = shallow(
			<OneLine
				width={width}
				numberOfMonthsInLine={numberOfMonthsInLine}
				festivalsForSelectedMonth={festivalsForSelectedMonth}
				monthNumber={monthNumber}
				extractFest={extractFest}
			/>
		);
		expect(wrapper.find(HorizontalLine)).toHaveLength(0);
	});
});
