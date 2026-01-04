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

// 3.2 Print Pyramid Pattern

function pyramid1(rows) {
  for (let i = 0; i < rows; i++) {
    console.log(" ".repeat(rows - 1 - i) + "*".repeat(2 * i + 1));
  }
}
// pyramid1(5);

// 3.3 Print Pyramid Pattern

function pyramid1(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    const curRow = i + 1;

    for (let j = 0; j < rows + i; j++) {
      if (j < rows - curRow) {
        str += " ";
      } else {
        str += "*";
      }
    }
    console.log(str);
  }
}
// pyramid1(5);

// 4 Print Inverted Pyramid Pattern
function invertedPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    // console.log(" ".repeat(rows - 1 - i) + "*".repeat(2 * i + 1));
    console.log(" ".repeat(i) + "*".repeat((rows - i) * 2 - 1));
  }
}
// invertedPyramid(5);

/* 
// 5 Print Hollow Square Pattern

Input: Rows = 5

Output:

*****
*   *
*   *
*   *
*****
*/
function hollowSquare(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || j === 1 || i === rows || j === rows) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}
// hollowSquare(5);

/*
// 6 Print Hollow Pyramid Pattern

Input: Rows = 5

Output:

    *
   * *
  *   *
 *     *
*********
*/
function hollowPyramid(row) {
  for (let i = 1; i <= 2 * row - 1; i += 2) {
    let str = "";
    const currentRow = (i + 1) / 2;

    for (let j = 1; j <= row + currentRow - 1; j++) {
      if (
        j <= row - currentRow ||
        (j > row - currentRow + 1 &&
          j < row + currentRow - 1 &&
          i !== 2 * row - 1)
      ) {
        str += " ";
      } else {
        str += "*";
      }
    }

    console.log(str);
  }
}
// hollowPyramid(5);

/*
// 7. Print Alternating Binary Triangle

Input: Rows = 5

Output:

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
*/
function AlternatingBinaryTree(row) {
  for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      if (i == j || (i + j) % 2 === 0) {
        str += "1";
      } else {
        str += "0";
      }
    }
    console.log(str);
  }
}
// AlternatingBinaryTree(5);

/* 8. Print Hollow Inverted Pyramid 
Input: Rows = 5

Output:

*********
 *     *
  *   *
   * *
    *
*/

function InvertedHollowPyramid(row) {
  for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 1; j <= row * 2 - 1; j++) {
      if (i === 1 || i === j || j === row * 2 - i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

// InvertedHollowPyramid(5);

/* 8. Print Butterfly Pattern

Input: Rows = 5
Output:

*       *
**     **
***   ***
**** ****
*********
**** ****
***   ***
**     **
*       *

*/

function ButterflyPattern(row) {
  const totalCol = row * 2 - 1;

  for (let i = 1; i <= totalCol; i++) {
    let str = "";
    for (let j = 1; j <= totalCol; j++) {
      if (
        (j <= i && i <= row) ||
        (i > row && j <= row * 2 - i) ||
        (i <= row && j >= row * 2 - i) ||
        (i > row && i <= j)
      ) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

// ButterflyPattern(7);

/* 9 .Print Diamond Pattern
Input: Rows = 3

Output:

    *
   ***
  *****
   ***
    *

*/
function printDiamond(rows) {
  const totalRows = rows * 2 - 1;

  for (let i = 1; i <= totalRows; i++) {
    let line = "";
    const level = i <= rows ? i : totalRows - i + 1;

    // spaces
    for (let s = 1; s <= rows - level; s++) {
      line += " ";
    }

    // // stars
    for (let star = 1; star <= 2 * level - 1; star++) {
      line += "*";
    }

    console.log(line);
  }
}

// printDiamond(3);

/* 

Print Hourglass Pattern
Input: Rows = 5

Output:

*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
*/
function printHourglass(n) {
  const totalRows = 2 * n - 1;
  const totalCols = totalRows;

  for (let i = 0; i < totalRows; i++) {
    let line = "";

    // Map row index for symmetry
    const row = i < n ? i : totalRows - i - 1;

    for (let j = 0; j < totalCols; j++) {
      if (j >= row && j < totalCols - row) {
        line += "*";
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
}

printHourglass(5);
