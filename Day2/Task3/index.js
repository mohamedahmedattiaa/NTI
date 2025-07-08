let message2 = prompt(
  "Enter the word to check how many times 'e' is repeated:"
);
if (/^\d+$/.test(message2)){
  alert("This a Numerical value");
}

let count = 0;
for (let i = 0; i < message2.length; i++) {
  if (message2[i] === "e") {
    count++;
  }
}
alert(`The letter 'e' appears ${count} times in the word "${message2}".`);
