let answerField = document.getElementById("Answer");
let btn = document.querySelector('input[type="button"][value="="]');
btn.addEventListener("click", EnterEqual);

let userinput = "";

function EnterNumber(value) {
  userinput += value;
  answerField.value = userinput;
}

function EnterOperator(operator) {
  userinput += `${operator}`;
  answerField.value = userinput;
}

function EnterClear() {
  userinput = "";
  answerField.value = "";
}

function EnterEqual() {
  try {
    if (!/^[0-9+\-*/. ()]+$/.test(userinput)) {
      throw new Error("Invalid input");
    } else {
      let result = eval(userinput);
      answerField.value = result;
      userinput = result.toString();
    }
  } catch (e) {
    answerField.value = "Error";
    userinput = "";
  }
}
