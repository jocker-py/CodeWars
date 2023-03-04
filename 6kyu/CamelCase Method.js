/*
link: https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

Write simple .camelCase method (camel_case function in PHP,
CamelCase in C# or camelCase in Java) for strings.
All words must have their first letter capitalized
without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)

*/

String.prototype.camelCase=function(){
  //your code here
  return this.split(' ').map((word) => word ? (word[0].toUpperCase() + word.slice(1)) : '').join('');
}

console.log("hello case".camelCase()); // HelloCase