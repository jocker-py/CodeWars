/*
link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  let max = 0;
  const words = x.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const arr = words.reduce((acc, arg) => {
    const sum = [...arg].reduce((sum, letter) => sum + alphabet.indexOf(letter) + 1, 0);
    if (max < sum) max = sum;
    return [...acc, [sum, arg]]
  }, []);
  return arr.find(item => item[0] === max)[1];
}