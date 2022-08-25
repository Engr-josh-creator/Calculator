const result = document.querySelector(".result");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const divide = document.querySelector(".divide");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const add = document.querySelector(".add");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const subtract = document.querySelector(".subtract");
const dot = document.querySelector(".dot");
const zero = document.querySelector(".zero");
const equalTo = document.querySelector(".equalTo");

const keys = [
  ac,
  del,
  divide,
  one,
  two,
  three,
  multiply,
  four,
  five,
  six,
  add,
  seven,
  eight,
  nine,
  subtract,
  dot,
  zero,
  equalTo,
];

const calculator = keys.forEach((input) => {
  input.addEventListener("click", function (e) {
    const key = e.target;
    const action = key.dataset.action;
    if (e.target.matches("button")) {
      const keyContent = key.textContent;
      const displayedNum = result.textContent;
    }

    if (!action) {
      if (!displayedNum) {
        result.textContent = keyContent;
      } else {
        result.textContent = displayedNum + keyContent;
      }
    } else if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key");
    } else if (action === "decimal") {
      console.log("decimal operator");
    } else if (action === "del") {
      console.log("del key");
    } else if (action === "clearAll") {
      console.log("clear operator");
    } else if (action === "calculate") {
      console.log("equal key");
    }
  });
});
