/*
link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/solutions/javascript

You will be given an array of numbers.
You have to sort the odd numbers in ascending
order while leaving the even numbers at
their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

function sortArray(array) {
  // Return a sorted array.
  let copy = [...array]
  let odd = [];
  for(let i = 0; i < copy.length; i++){
    if(copy[i] % 2 !== 0){
      odd = [...odd, copy[i]];
      copy[i] = null;
    }
  }
  odd.sort((a, b) => a - b).reverse();
  for(let i = 0; i < array.length; i++){
    if(copy[i] === null){
      copy[i] = odd.pop()
    } else {
      copy[i] = array[i];
    }
  }
  return copy
}