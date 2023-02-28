/*
Please write a function that sums a list,
but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

const sumNoDuplicates = (numList) => {
  let sum = 0;
  const duplicates = [];
  numList.forEach((num, index) => {
    if(numList.indexOf(num, index + 1) !== -1) duplicates.push(num);
    if(!duplicates.includes(num)) sum += num
  })
  return sum;
}

console.log(sumNoDuplicates([3,4,3,6])); // 10