/* 
// 1. Print Right-Angled Star Triangle

*
**
***
****
***** 

*/
function rightAngled(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";

    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }

    console.log(str);
  }
}
// start1(5);

/* 
// 2. Print Inverted Right-Angled Triangle

*****
****
***
**
*

*/
function invertedRightAngled(rows) {
  for (let i = rows; i > 0; i--) {
    let str = "";
    for (let j = i; j > 0; j--) {
      str += "*";
    }
    console.log(str);
  }
}
// invertedRightAngled(5);

/* 
// 3.1 Print Pyramid Pattern

    *
   ***
  *****
 *******
*********

*/
function pyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let str = " ".repeat(rows - i - 1) + "*";
    for (let j = 1; j < 2 * i + 1; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}
// pyramid(5);

// 3.1 Print Pyramid Pattern

function pyramid1(rows) {
  for (let i = 0; i < rows; i++) {
    console.log(" ".repeat(rows - 1 - i) + "*".repeat(2 * i + 1));
  }
}
// pyramid1(5);

function invertedPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    // console.log(" ".repeat(rows - 1 - i) + "*".repeat(2 * i + 1));
    console.log(" ".repeat(i) + "*".repeat((rows - i) * 2 - 1));
  }
}
// invertedPyramid(5);
