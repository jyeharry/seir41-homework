// Write a function to reverse a string.
const reverseString = (str) => {
  return str.split('').reduce((string, char) => char + string);
}

console.log(reverseString('Stuff'));

// Write function to compute Nth fibonacci number:
const fibs = {};

const fibonacci = (num) => {
  if (fibs[num]) return fibs[num];
  if (num === 2 || num === 1) return fibs[num] = 1;
  return fibs[num] = fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(40));

// Print out the grade-school multiplication table up to 12x12
const timesTables = () => {
}

console.log(timesTables());
// Write a function that sums up integers from a text file, one int per line.
// Write function to print the odd numbers from 1 to 99.
// Find the largest int value in an int array.
// Format an RGB value (three 1-byte numbers) as a 6-digit hexadecimal string.
