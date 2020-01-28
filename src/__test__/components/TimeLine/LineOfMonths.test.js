import React from 'react';
import { shallow } from 'enzyme';
import LineOfMonths from '../../../components/TimeLine/LineOfMonths';
import OneLine from '../../../components/TimeLine/OneLine';

describe('test LineOfMonths component', () => {
	it('correct pass props to the LineOfMonths component', () => {
		const numberOfMonthsInLine = 3;
		const festivals = [
			{
				id: 1,
				name: 'Atlas Weekend',
				description: 'description',
				startDate: '08/08/2020',
				endDate: '08/12/2020',
				scale: 7,
				background: '#0000ff',
			},
			{
				id: 2,
				name: 'Upark Festival',
				description: 'description',
				startDate: '08/21/2020',
				endDate: '08/23/2020',
				scale: 9,
				background: '#ff0000',
			},
		];
		const width = 1000;
		const colNumber = 1;
		const extractFest = jest.fn();
		const wrapper = shallow(
			<LineOfMonths
				numberOfMonthsInLine={numberOfMonthsInLine}
				festivals={festivals}
				width={width}
				extractFest={extractFest}
				colNumber={colNumber}
			/>
		);
		expect(wrapper.find(OneLine)).toHaveLength(3);
	});
});
