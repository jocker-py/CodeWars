/*
link: https://www.codewars.com/kata/55caef80d691f65cb6000040/train/javascript
In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
*/

function geometricSequenceElements(a, r, n){
  // Your code here!
  return new Array(n).fill(a).map((arg, idx) => arg * (r ** idx)).join(", ");
}

geometricSequenceElements(2, 3, 5) // '2, 6, 18, 54, 162'