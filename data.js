import { isValid } from 'date-fns';

function dateIsValid(year, month, day) {
	return isValid(new Date(year, month, day));
}

console.log(dateIsValid('2024', '08', '13'));
