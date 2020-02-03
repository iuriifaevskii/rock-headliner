import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../../../components/common';

describe('test Link component', () => {
	it('correct pass props to the Link component if openInNewTab is true', () => {
		const href = 'https://www.google.com';
		const text = 'google';
		const openInNewTab = true;
		const fontSize = 16;

		const expectedStyles = {
			color: '#fe921f',
			fontSize: '16px',
			cursor: 'default',
			textDecoration: 'underline',
		};
		const wrapper = shallow(
			<Link
				href={href}
				text={text}
				openInNewTab={openInNewTab}
				fontSize={fontSize}
			/>
		);
		expect(wrapper.find('.link').text()).toEqual('google');
		expect(wrapper.find('.link').props().style).toEqual(expectedStyles);
		expect(wrapper.find('.link').props().target).toEqual('_blank');
		expect(wrapper.find('.link').props().rel).toEqual('noopener noreferrer');
	});

	it('correct pass props to the Link component if openInNewTab is false, trigger handleMouseLeave and handleMouseEnter with correct expected style', () => {
		const href = 'https://www.google.com';
		const text = 'google';
		const openInNewTab = false;
		const fontSize = 16;

		const expectedStyles = {
			color: '#fe921f',
			fontSize: '16px',
			cursor: 'pointer',
			textDecoration: 'none',
		};
		const wrapper = shallow(
			<Link
				href={href}
				text={text}
				openInNewTab={openInNewTab}
				fontSize={fontSize}
			/>
		);
		wrapper.simulate('mouseenter');
		expect(wrapper.find('.link').props().style).toEqual(expectedStyles);
		wrapper.simulate('mouseleave');
		expectedStyles.textDecoration = 'underline';
		expectedStyles.cursor = 'default';
		expect(wrapper.find('.link').props().style).toEqual(expectedStyles);
	});
});
