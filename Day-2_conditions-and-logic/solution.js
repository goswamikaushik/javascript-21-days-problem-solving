// 1.1 Find the Maximum of Three Numbers
function maxOfThree(...numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const cur = numbers[i];
    if (cur > max) {
      max = cur;
    }
  }
  return max;
}

// maxOfThree(-1, 0, -4)

// 1.2 Find the Maximum of Three Numbers
const maxOfThreeByMath = (...numbers) => console.log(Math.max(...numbers));

// maxOfThreeByMath(-1, 0, -4)

// 1.3 Find the Maximum of Three Numbers
function maxOfThreeByIfElse(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = { a };
  } else if (b >= c) {
    max = { b };
  } else {
    max = { c };
  }

  console.log(max);
}
maxOfThreeByIfElse(0, 1, -2);
