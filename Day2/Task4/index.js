function validateName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}


let name;
do {
  name = prompt("Enter your name:");
  if (!validateName(name)) {
    alert("Invalid name. Use only letters and spaces.");
  }
} while (!validateName(name));


let email;
do {
  email = prompt("Enter your email:");
  if (!validateEmail(email)) {
    alert("Invalid email. Please enter a valid format (e.g., user@example.com).");
  }
} while (!validateEmail(email));


let phone;
do {
  phone = prompt("Enter your phone number (10 digits):");
  if (!validatePhone(phone)) {
    alert("Invalid phone number. Must be exactly 10 digits (e.g., 0123456789).");
  }
} while (!validatePhone(phone));

alert(`Valid Input Received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
