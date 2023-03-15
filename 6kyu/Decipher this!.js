/*
link: https://www.codewars.com/kata/581e014b55f2c52bb00000f8/javascript

You are given a secret message you need to decipher.
Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  //have fun!
  return str.split(' ').map( word => {
    let first = parseInt(word);
    let second =  [...word.slice(`${first}`.length)];
    let newSecond = [...second].map(
      (letter, idx, arr) => {
        return idx === 0 ?
          arr[arr.length - 1] :
          idx === arr.length - 1 ? arr[0] :
            letter
      });
    return String.fromCharCode(first) + newSecond.join('');
  }).join(' ');
};



console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'