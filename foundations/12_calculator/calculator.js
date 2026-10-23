const add = (x, y) => {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  const sumAll = array.reduce(
    (total, current) => total + current,
    0,
  );
  return sumAll; 
	
};

const multiply = function(array) {
  const multAll = array.reduce(
    (total, current) => total * current,
    1,
  );
  return multAll
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
  let factNum = 1
  for (let i = 2; i <= n; i++) {
    factNum *= i;
  }
  return factNum;
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
