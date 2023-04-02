/*
link:https://www.codewars.com/kata/52597aa56021e91c93000cb0

Write an algorithm that takes an array and moves all of the zeros
to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"])
// returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  const part1 = arr.filter(item => item !== 0);
  const part2 = new Array(arr.length - part1.length).fill(0);
  return [...part1, ...part2]
}