import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders rock headliner text', () => {
	const { getByText } = render(<App />);
	const textElement = getByText(/rock headliner/i);
	expect(textElement).toBeInTheDocument();
});
