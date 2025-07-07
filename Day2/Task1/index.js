function addNumbers() {
  let input = prompt("Enter numbers separated by commas (1, 2, 3 ...):");
  let parts = input.split(',');
  let values = [];
  let sum = 0;

  for (let i = 0; i < parts.length; i++) {
    let num = parseFloat(parts[i].trim());
    values.push(num);
  }

  for (let i = 0; i < values.length; i++) {
    typeof values[i] !== "number" || isNaN(values[i])
      ? ((sum = "All inputs must be real numbers."), (i = values.length))
      : (sum += values[i]);
  }

  return sum;
}
alert(addNumbers());