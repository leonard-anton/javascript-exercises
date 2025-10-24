const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, elem) => sum + elem, 0);
};

const multiply = function (arr) {
  return arr.reduce((prod, elem) => prod * elem, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let p = 1;

  for (let i = 1; i <= a; i++)
    p *= i;

  return p;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
