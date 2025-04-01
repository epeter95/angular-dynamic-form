export enum DatepickerMode {
  date = 'date',
  time = 'time',
  datetime = 'date-time',
}

export function getActDateString(
  increaseYear?: number,
  increaseMonthNumber?: number
): string {
  const date = new Date();
  let month = date.getMonth() + 1;
  if (!!increaseMonthNumber) {
    month += increaseMonthNumber;
  }
  let monthString = month.toString();
  const day = date.getDate();
  let dayString = day.toString();
  if (day < 10) {
    dayString = '0' + dayString;
  }
  if (month < 10) {
    monthString = '0' + monthString;
  }
  let year = date.getFullYear();
  if (!!increaseYear) {
    year += increaseYear;
  }
  return year + '-' + monthString + '-' + dayString;
}
