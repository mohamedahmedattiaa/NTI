let message = prompt("Enter a string to check if it's a palindrome:");
let isNumber = !isNaN(message);
let caseSensitive = confirm(
  "Do you want to consider case sensitivity? [ Ok / Cancel]"
);
if (caseSensitive == "No") {
  message = message.toLowerCase();
}

let isPalindrome = true;
for (let i = 0; i < message.length / 2; i++) {
  if (message[i] !== message[message.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  alert(`${message} is a palindrome.`);
} else {
  if (isNumber) {
    alert(`${message} is a number and not a palindrome.`);
  } else {
    alert(`${message} is not a palindrome.`);
  }
}
