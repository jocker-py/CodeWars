/*
link: https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

Given an array arr of strings, complete the function by
calculating the total perimeter of all the islands.
Each piece of land will be marked with 'X' while the
water fields are represented as 'O'. Consider each tile
 being a perfect 1 x 1 piece of land. Some examples for
 better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
which represents:

should return: "Total land perimeter: 18"
*/

function landPerimeter(array) {
  let result = 0;
  let arr = array.map(item => [...item]);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === 'X'){
        result += 4;
        if(arr[i+1] && arr[i+1][j] === 'X') result -= 2;
        if(arr[i][j+1] && arr[i][j+1] === 'X') result -=2;
      }

    }
  }
  return `Total land perimeter: ${result}`
}