/*
link: https://www.codewars.com/kata/5831c204a31721e2ae000294/javascript

DESCRIPTION:
When provided with a String, capitalize all vowels

For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

function swap (string) {
  const vowels = ['a','e','i','o', 'u'];
  return [...string].map(letter => vowels.includes(letter) ? letter.toUpperCase() : letter).join('');
}