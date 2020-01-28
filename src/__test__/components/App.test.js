import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../../App';

describe('App', () => {
	const fests = [
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

	it('loads the App component if fetchFestsData returns many fests', async () => {
		const props = {
			fetchFestsData: jest.fn().mockResolvedValue(fests),
		};
		await act(async () => {
			render(<App fetchFestsData={props.fetchFestsData} />, container);
		});
		expect(container.textContent).not.toContain('Loading...');
		expect(container.querySelectorAll('.vertical-line').length).toBe(31);
		expect(
			container.querySelectorAll('.vertical-line.pointed-day').length
		).toBe(8);
		expect(!!container.querySelector('.fest-panel')).toBe(false);
		await act(async () => {
			container.querySelector('.vertical-line.pointed-day').click();
		});
		expect(!!container.querySelector('.fest-panel')).toBe(true);
	});

	it('loads the App component if fetchFestsData returns empry array', async () => {
		const props = {
			fetchFestsData: jest.fn().mockResolvedValue([]),
		};
		await act(async () => {
			render(<App fetchFestsData={props.fetchFestsData} />, container);
		});
		expect(container.textContent).toContain('Loading...');
		expect(container.querySelectorAll('.vertical-line').length).toBe(0);
		expect(!!container.querySelector('.fest-panel')).toBe(false);
	});
});
