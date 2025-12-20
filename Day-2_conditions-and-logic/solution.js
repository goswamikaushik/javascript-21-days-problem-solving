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
// maxOfThreeByIfElse(0, 1, -2);

// 2.1 Check if a Number is Positive, Negative, or Zero
function checkNumberSign(num) {
  if (num === 0) return "zero";
  if (num > 0) return "positive";
  return "negative";
}
// console.log(checkNumberSign(-1));

// 2.2 Check if a Number is Positive, Negative, or Zero
const checkNumberSign1 = (num) =>
  num === 0 ? "zero" : num > 0 ? "positive" : "negative";
// console.log(checkNumberSign1(-1));

// 3.1 .Calculate Electricity Bill

// - Input: Units = 230
// - Output: Total Bill = ₹1500

// - 0–100 units → ₹5 per unit
// - 101–200 units → ₹7 per unit
// - 201–300 units → ₹10 per unit
// - Above 300 units → ₹12 per unit
function calculateElectricityBill(unit) {
  if (unit === 0) return 0;
  if (unit <= 100) return unit * 5;
  if (unit <= 200) return unit * 7;
  if (unit <= 300) return unit * 10;
  return unit * 12;
}
// console.log(calculateElectricityBill(0));
// console.log(calculateElectricityBill(50));
// console.log(calculateElectricityBill(100));
// console.log(calculateElectricityBill(150));
// console.log(calculateElectricityBill(200));
// console.log(calculateElectricityBill(250));
// console.log(calculateElectricityBill(300));
// console.log(calculateElectricityBill(500));

// 3.1 .Calculate Electricity Bill
function calculateElectricityBill1(unit) {
  switch (true) {
    case unit === 0:
      return "no bill";
    case unit <= 100:
      return unit * 5;
    case unit <= 200:
      return unit * 7;
    case unit <= 300:
      return unit * 10;
    default:
      return unit * 12;
  }
}
// console.log(calculateElectricityBill1(0));
// console.log(calculateElectricityBill1(50));
// console.log(calculateElectricityBill1(100));
// console.log(calculateElectricityBill1(150));
// console.log(calculateElectricityBill1(200));
// console.log(calculateElectricityBill1(250));
// console.log(calculateElectricityBill1(300));
// console.log(calculateElectricityBill1(500));
