function isValidDateFormat(dateString) {
  const formatRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!formatRegex.test(dateString)) {
    return false;
  }
  const parsedDate = new Date(dateString);
  return !isNaN(parsedDate.getTime());
}

function getDayName(date) {
  const days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  return days[new Date(date).getDay()];
}

let dateInput;
let dayName;

while (true) {
  dateInput = prompt("Enter the full date (YYYY-MM-DD):");

  if (isValidDateFormat(dateInput)) {
    dayName = getDayName(dateInput);
    break;
  }

  alert("Invalid format or date. Please use: YYYY-MM-DD (e.g. 2025-07-08)");
}

alert(`The day of the week for ${dateInput} is ${dayName}.`);
