const talkingCalendar = (date) => {
  // use a deconstructor to define the split dates
  let [year, month, day] = date.split('/');

  const calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // set the month to the calendar month - 1 for correct index
  month = calendarMonths[month - 1];

  // depending on the day's last digit, append the correct suffix
  if (day.charAt(1) === "2") {
    day = day + 'nd';
  } else if (day.charAt(1) === "3") {
    day = day + 'rd';
  } else {
    day = day + 'th';
  }

  // If the day starts with 0, drop it
  if (day.charAt(0) === "0") {
    day = day.replace("0", "");
  }

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));