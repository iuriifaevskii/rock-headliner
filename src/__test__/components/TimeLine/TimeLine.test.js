import React from 'react';
import { shallow } from 'enzyme';
import { TimeLine } from '../../../components';
import LineOfMonths from '../../../components/TimeLine/LineOfMonths';

describe('test TimeLine component', () => {
	it('correct pass props to the TimeLine component', () => {
		const numberOfMonthsInLine = 3;
		const festivals = [
			{
				_id: '1',
				name: 'Atlas Weekend',
				description: 'description',
				startDate: '08/08/2020',
				endDate: '08/12/2020',
				scale: 7,
				background: '#0000ff',
			},
			{
				_id: '2',
				name: 'Upark Festival',
				description: 'description',
				startDate: '08/21/2020',
				endDate: '08/23/2020',
				scale: 9,
				background: '#ff0000',
			},
		];
		const width = 800;
		const extractFest = jest.fn();
		const wrapper = shallow(
			<TimeLine
				numberOfMonthsInLine={numberOfMonthsInLine}
				festivals={festivals}
				width={width}
				extractFest={extractFest}
			/>
		);
		expect(wrapper.find(LineOfMonths)).toHaveLength(4);
	});
});
