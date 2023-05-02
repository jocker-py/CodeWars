/*
link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

Find the missing letter
Write a method that takes an array of consecutive (increasing)
letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly
one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/


function findMissingLetter(array){
  const getNumber = (l) => l.charCodeAt(0);
  const getString = (n) => String.fromCharCode(n);
  const compareString = (str1, str2) => getNumber(str1) !== getNumber(str2) - 1;
  for(let i = 1; i < array.length; i++){
    if(compareString(array[i - 1], array[i])){
      const numPrev = getNumber(array[i])
      return getString(numPrev - 1);
    }
  }
}