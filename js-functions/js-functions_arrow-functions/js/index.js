console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log("Current hour: ", getCurrentHour());

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

console.log("Vector length: ", getVectorLength(3, 4, 0));

const cleanInput = (string) => string.toLowerCase().trim();

console.log("Clean input: ", cleanInput("djhfshaufh"));

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log("Is odd and small: ", isOddAndSmall(3));

function add3(a, b, c) {
  return a + b + c;
}

console.log("Add three: ", add3(1, 2, 3));

function repeat10(string) {
  return string.repeat(10);
}

console.log("Repreat Ten: ", repeat10("Hallo "));
