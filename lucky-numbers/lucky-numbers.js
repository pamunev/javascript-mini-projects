// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  /*const string1 = String(array1);
  console.log("string1:", string1);
  const string2 = String(array2);*/
  const string1 = array1.join("");
  console.log("string1:", string1);
  const string2 = array2.join("");
  const number1 = Number(string1);
  console.log("numb1:", number1);
  const number2 = Number(string2);
  console.log("num2:", number2);
  const total = number1 + number2;
  return total;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numString = String(value);
  const numArray = numString.split("");
  const reversedArray = numArray.reverse();
  const reversedString = reversedArray.join("");
  const reversedNum = Number(reversedString);
  return value === reversedNum;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  throw new Error("Implement the errorMessage function");
}
