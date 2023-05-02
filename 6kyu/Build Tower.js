/*
link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

DESCRIPTION:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given
a positive integer number of floors. A tower block is represented
with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/

function towerBuilder(nFloors) {
  // build here
  let i = 1;
  let maxLength = 0;
  let result = [];
  const getTimes = (max, curr) => (max - curr) / 2;
  const getSpaces = (times) => ' '.repeat(times);
  const addSpaces = (item) => {
    if(item.length === maxLength) return item
    const times = getTimes(maxLength, item.length);
    const spaces = getSpaces(times);
    return spaces + item + spaces;
  }

  while(nFloors){
    const stars = '*'.repeat(i);
    result = [...result, stars]
    i += 2;
    nFloors--;
  }

  maxLength = result[result.length - 1].length;
  return result.map(addSpaces)
}