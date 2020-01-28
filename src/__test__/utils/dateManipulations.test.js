import {
	yearToday,
	monthIndexToName,
	monthIndexToColor,
	daysInMonth,
	dateRangeArray,
} from '../../utils/dateManipulations';

describe('test dateManipulations util', () => {
	it('correct do yearToday function', () => {
		const year = yearToday();
		expect(typeof year).toBe('number');
	});

	it('correct do monthIndexToName function', () => {
		const monthName = monthIndexToName(1);
		expect(monthName).toBe('January');
	});

	it('correct do monthIndexToColor function', () => {
		const monthColor = monthIndexToColor(1);
		expect(monthColor).toBe('#c0589d');
	});

	it('correct do daysInMonth function', () => {
		const date = new Date('01/26/2020');
		const countDaysInMonth = daysInMonth(date);
		expect(countDaysInMonth).toBe(31);
	});

	it('correct do dateRangeArray function', () => {
		const start = new Date('08/08/2020');
		const end = new Date('08/11/2020');
		const dateArray = dateRangeArray(start, end);
		expect(dateArray).toEqual([
			new Date('08/08/2020'),
			new Date('08/09/2020'),
			new Date('08/10/2020'),
			new Date('08/11/2020'),
		]);
	});
});
