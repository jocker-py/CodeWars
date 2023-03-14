/*
link: https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

Complete the method/function so that it converts dash/underscore
 delimited words into camel casing. The first word within the
 output should be capitalized only if the original word was
 capitalized (known as Upper Camel Case, also often referred
 to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  return [...str].map((item, idx, arr) => {
    if( /[\W_]/.test(item)){
      arr[idx + 1] = arr[idx + 1].toUpperCase();
      return ''
    }
    return item
  }).join('')
}