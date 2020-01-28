import months from './months';

function yearToday() {
	const today = new Date();
	return today.getFullYear();
}

function monthIndexToName(monthIndex) {
	const monthNames = months.map(item => item.name);
	return monthNames[monthIndex - 1];
}

function monthIndexToColor(monthIndex) {
	const monthColors = months.map(item => item.color);
	return monthColors[monthIndex - 1];
}

function daysInMonth(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function dateRangeArray(start, end) {
	const dateArray = [];
	const startDate = new Date(start);

	while (startDate <= end) {
		dateArray.push(new Date(startDate));
		startDate.setDate(startDate.getDate() + 1);
	}

	return dateArray;
}

export {
	monthIndexToName,
	monthIndexToColor,
	daysInMonth,
	yearToday,
	dateRangeArray,
};
