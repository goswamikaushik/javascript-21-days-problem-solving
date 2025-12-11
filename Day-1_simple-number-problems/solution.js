// 1. Print Numbers from 1 to N
function printNumber(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// printNumber(10);

// 2. Print Numbers from N to 1 without changing the loop condition of above question
function printNumberWithout(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// printNumberWithout(10);

// 3. Print All Even Numbers from 1 to N
function printEvenNumber(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
// printEvenNumber(10);

// 4-A. Sum of First N Natural Numbers (Brute Force O(n))
function printSumOfNumberA(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
// printSumOfNumberA(1000000000);

// 4-B. Sum of First N Natural Numbers (Optimized Solution maths formula O(1))
function printSumOfNumberB(n) {
  const bigN = BigInt(n);
  let sum = (bigN * (bigN + 1n)) / 2n;
  console.log(sum);
}
// printSumOfNumberB(1000000000000);

// 5. Product (Factorial) of N
function factorial(num) {
  const n = BigInt(num);

  if (n === 1n || n === 0n) {
    console.log(1n);
    return;
  }

  let facto = 1n;

  for (let i = 2n; i <= n; i++) {
    facto *= i;
  }

  console.log(facto);
}
// factorial(5n);

// 6. Sum of All Even Numbers up to N
function printSumOfEventNumber(n) {
  const bigN = BigInt(n);
  let sum = bigN * (bigN + 1n);
  console.log(sum);
}
// printSumOfEventNumber(5n);

// 7. Print Squares of Numbers from 1 to N
function printSquaresOfNumber(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i ** 2);
    console.log(Math.pow(i, 2));
  }
}
// printSumOfSquaresOfNumber(10);

// 8. Print all numbers divisible by 3 and 5 up to N
function printNumDivisibleBy3And5(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}
// printNumDivisibleBy3And5(100);

// 9. Find the sum of all odd numbers up to N
function printSumOfOddNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
}
// printSumOfOddNumbers(10);

// 10. Print the cubes of numbers from 1 to N
function printSumOfCubesOfNumber(n) {
  for (let i = 1; i <= n; i++) {
    console.log(Math.pow(i, 3));
  }
}
// printSumOfCubesOfNumber(5);

// 11. Print only the numbers that are both even and perfect squares
function printOnlyEvenAndSquares(n) {
  for (let i = 1; i <= n; i++) {
    const sq = Math.pow(i, 2);
    if (sq % 2 === 0) {
      console.log(sq);
    }
  }
}
// printOnlyEvenAndSquares(5);

// 12. Print sum of all square number 1 to N
function printSumOfSquareNum(n) {
  sum = (n * (n + 1) * (2 * n + 1)) / 6;
  console.log(sum);
}
printSumOfSquareNum(5);
