const container = document.querySelector(".container");
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
    let displayedNum;
    let keyContent;
    if (e.target.matches("button")) {
      keyContent = key.textContent; //we are updating our variable.
      displayedNum = result.textContent;

      //when a user hit a number key. remove the operator
      // Array.from(key.parentNode.children).forEach((k) =>
      //   k.classList.remove("is-depressed")
      // );
    }

    if (!action) {
      if (!displayedNum) {
        result.textContent = keyContent;
      } else {
        result.textContent = displayedNum + keyContent; //appending click key to displayedNum(empty at first)
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const operator = key.classList.add("is-depressed"); //when a user hit an operator, show it is active
      result.textContent = displayedNum + operator;
    }
    if (action === "decimal") {
      result.textContent = displayedNum + ".";
    }
    if (action === "del") {
      console.log("del key"); //remove each figures or operator from result.textContent
    }
    if (action === "clearAll") {
      console.log("clear operator"); //delete everything in the result.textContent
    }
    if (action === "calculate") {
      console.log("equal key"); //equate everything that is in result.keyContent
    }
  });
});
