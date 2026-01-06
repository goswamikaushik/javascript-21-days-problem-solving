// Make Number
const digitList1 = [2, 4, 6, 5];

function printNum(arr) {
  let sum = 0;
  for (let i = 0; i < digitList1.length; i++) {
    sum += arr[i] * 10 ** i;
    console.log("----->", sum);
  }
  console.log(sum);
}
printNum(digitList1);
