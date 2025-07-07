 let numbers = [];

    for (let i = 0; i < 3; i++) {
      let input = prompt(`Enter number ${i + 1}:`);
      let num = parseFloat(input);

      if (isNaN(num)) {
        alert("Invalid input. Please enter only numbers.");
        i--;
      } else {
        numbers.push(num);
      }
    }

    let a = numbers[0], b = numbers[1], c = numbers[2];
    let sum = a + b + c;
    let product = a * b * c;
    let division = b === 0 || c === 0 ? " Division by zero error" : a / b / c;

    let html = `
      <div><span class="label">sum of the 3 values </span>${a}+${b}+${c} = ${sum}</div>
      <div><span class="label">multiplication of the 3 values </span>${a}*${b}*${c} = ${product}</div>
      <div><span class="label">division of the 3 values </span>${a}/${b}/${c} = ${division}</div>
    `;

    document.getElementById("output").innerHTML = html;