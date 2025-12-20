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
function calculateElectricityBill(unit) {
  if (unit === 0) return 0;
  if (unit <= 100) return unit * 5;
  if (unit <= 200) return unit * 7;
  if (unit <= 300) return unit * 10;
  return unit * 12;
}
// console.log(calculateElectricityBill(0));

// 3.2 Calculate Electricity Bill
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

// 3.3 Calculate Electricity Bill ( step up price)
function calculateElectricityBill1(unit) {
  let total = 0;

  if (unit === 0) {
    total = 0;
  } else if (unit <= 100) {
    total = unit * 5;
  } else if (unit <= 200) {
    total = 100 * 5 + (unit - 100) * 7;
  } else if (unit <= 300) {
    total = 100 * 5 + 100 * 7 + (unit - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12;
  }
  return total;
}

// 4.1 Check if a Character is a Vowel or Consonant
function checkVowel(char) {
  if (!/[a-z]/.test(char)) {
    return "Not a character";
  }

  const c = char.toLowerCase();

  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    return "Vowel";
  } else {
    return "Consonants";
  }
}
// console.log(checkVowel(1));

// 4.2 Check if a Character is a Vowel or Consonant (Using Regex)
function checkVowel1(char) {
  if (!/[a-zA-z]/.test(char)) {
    return "Not a valid alphabet";
  }

  if ("aeiou".includes(char.toLowerCase())) {
    return "Vowel";
  } else {
    return "Consonants";
  }
}
// console.log(checkVowel1(1));

// 4.3 Check if a Character is a Vowel or Consonant (Using ASCII Code)
function checkVowel2(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return "Not a valid alphabet";
  }

  let ascii = char.charCodeAt();

  if (!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))) {
    return "Not a valid alphabet";
  }

  return "aeiou".includes(char.toLowerCase()) ? "Vowel" : "Consonant";
}
// console.log(checkVowel2("x"));

// 5. Check if a Year is a Leap Year
function checkLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? "Leap Year"
    : "Not a Leap Year";
}
// console.log(checkLeapYear(2800));

// 6. Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkCharType(c) {
  if (typeof c !== "string" || c.length !== 1) {
    return "Invalid input";
  }

  if (/^[a-z]$/.test(c)) return "Lowercase";
  if (/^[A-Z]$/.test(c)) return "Uppercase";
  if (/^[0-9]$/.test(c)) return "Digit";

  return "Special Character";
}
// console.log(checkCharType("A"));
// console.log(checkCharType("a"));
// console.log(checkCharType("asd"));
// console.log(checkCharType("/"));

// 7. Check Triangle Type Using Sides and Angles
function checkTriangleType(a, b, c) {
  // Validity check
  if (a + b <= c || b + c <= a || c + a <= b) return "Not a valid triangle";

  // Sort sides
  const sides = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = sides;

  const x2 = x ** 2;
  const y2 = y ** 2;
  const z2 = z ** 2;

  // Angle-based
  if (x2 + y2 === z2) {
    return "Right-angled triangle";
  }

  // Step 4: side-based
  if (a === b && b === c) {
    return "Equilateral triangle";
  }

  if (a === b || b === c || a === c) {
    return "Isosceles triangle";
  }

  return "Scalene triangle";
}
// console.log(checkTriangleType(3, 4, 5));
// console.log(checkTriangleType(5, 5, 5));
// console.log(checkTriangleType(5, 8, 8));
// console.log(checkTriangleType(6, 6, 4));
// console.log(checkTriangleType(1, 2, 2));

// 8. Calculate Income Tax Based on Slabs
// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%
function calculateTax(income) {
  const slab1 = 250000;
  const slab2 = 500000;
  const slab3 = 1000000;

  let tax = 0;

  if (income > slab3) {
    tax = (income - slab3) * 0.3;
    income = slab3;
  }
  if (income > slab2) {
    tax += (income - slab2) * 0.2;
    income = slab2;
  }
  if (income > slab1) {
    tax += (income - slab1) * 0.05;
  }

  return tax;
}
// console.log(calculateTax(750000));
