/**
 * ------------------------------------------------------------
 * Problem: Reverse an Array
 * Difficulty: Easy
 * Platform: Common DSA Problem
 * ------------------------------------------------------------
 *
 * Problem Statement:
 * Given an array of integers, return a new array with the elements
 * in reversed order. Do not mutate the original array unless required.
 *
 * Input:
 * arr = [1, 2, 3, 4, 5]
 *
 * Output:
 * [5, 4, 3, 2, 1]
 *
 * ------------------------------------------------------------
 * Author: Kaushik Goswami
 * Date: 18-11-2025
 * ------------------------------------------------------------
 */

// ------------------------------------------------------------
// Solution 1: Using Temp Array Technique (O(n) time, O(1) space)
// ------------------------------------------------------------
function reverseArray1(arr) {
  const temp = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}
// console.log("----->", reverseArray1([1, 2, 3, 4, 5]));

// ------------------------------------------------------------
// Solution 2: Using Two-Pointer Technique (O(n) time, O(1) space)
// ------------------------------------------------------------
function reverseArray2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    console.log("--left-->", arr[left]);
    console.log("---right--->", arr[right]);
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}
// console.log("---output-->", reverseArray2([1, 2, 3, 4]));
