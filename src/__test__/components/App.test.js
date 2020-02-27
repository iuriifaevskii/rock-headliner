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
		const mockSuccessResponse = {
			data: [
				{
					_id: '5e4af1cba9f9ff1d7c2f057b',
					name: 'Test Festival 2',
					description: 'description 2',
					startDate: '08/31/2020',
					endDate: '09/03/2020',
					scale: 8,
					background: '#b100bdfa',
					site: 'http://www.javascriptkit.com/',
					ticket: 'http://www.javascriptkit.com/',
					banner:
						'https://www.billboard.com/files/styles/article_main_image/public/media/ultra-europe-photo-by-Julien-Duval-2017-billboard-1548.jpg',
					artistIDs: [],
					socialNetworks: [
						{
							_id: '1',
							name: 'Facebook',
							link: 'https://www.facebook.com/atlasweekend',
						},
						{
							_id: '2',
							name: 'Instagram',
							link: 'https://www.instagram.com/atlasweekend',
						},
					],
				},
			],
		};
		const mockJsonPromise = Promise.resolve(mockSuccessResponse);
		const fests = Promise.resolve({
			json: () => mockJsonPromise,
		});

		jest.spyOn(global, 'fetch').mockImplementation(() => fests);

		await act(async () => {
			render(<App />, container);
		});
		expect(container.querySelectorAll('.one-line').length).toEqual(2);
	});
});
