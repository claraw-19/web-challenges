// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//  Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(array) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < 3; i++) {
    if (array[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  if (even > odd) {
    //search odd number
    for (let number of array) {
      if (number % 2 === 1) {
        return number;
      }
    }
  } else {
    //search even number
    for (let number of array) {
      if (number % 2 === 0) {
        return number;
      }
    }
  }
}

const array = [3, 5, 11, 13, 22, 33, 45];
console.log(findOutlier(array));
