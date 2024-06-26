let expression = "";

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperation(operator) {
  expression += operator;
  updateDisplay();
}

function clearScreen() {
  expression = "";
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    alert("Invalid expression!");
    clearScreen();
  }
}

function updateDisplay() {
  document.getElementById("current-input").innerText = expression;
  document.getElementById("display").innerText = expression || "0";
}
