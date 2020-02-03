import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../../App';

// TO DO: delete "!src/App.js" line from package.json
// after completing the logic in the component and completing that unit test

describe('App', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('loads the App component', async () => {
		await act(async () => {
			render(<App />, container);
		});
		expect(container.textContent).toContain('Loading...');
	});
});
