import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from '../../../components/common';

describe('test Spinner component', () => {
	it('correct pass props to the Spinner component', () => {
		const text = 'Loading...';
		const wrapper = shallow(<Spinner />);
		expect(wrapper.find('.spinner').text()).toEqual(text);
	});
});
