/*20180509
STRING CONVERSION https://js.checkio.org/en/mission/short-string-conversion/

You are given two strings, line1 and line2. Answer, what is the smallest number
of operations you need to transform line1 to line2?

Operations are:
Delete one letter from one of strings
Insert one letter into one of strings
Replace one of letters from one of strings with another letter


Input: two arguments, two strings.

Output: int, minimum number of operations.

Example:

stepsToConvert('line1', 'line1') == 0
stepsToConvert('line1', 'line2') == 1
stepsToConvert('ine', 'line2') == 2
*/

function stepsToConvert(str1, str2) {
  var operations = 0;
  var str1Arr = str1.split("");
  var str2Arr = str2.split("");

  if (str1.length < str2.length) {operations = str2.length - str1.length; return operations};
  if (str1.length > str2.length) {operations = str1.length - str2.length; return operations};

  var startIdx = 0;
  var endIdx = 1;

  while (str2.search(str1.slice(startIdx, endIdx)) === -1) {
    startIdx += 1;
    endIdx += 1;
  }

  while (str2.search(str1.slice(startIdx, endIdx)) === -1) { //Infinite loop
    endIdx += 1;
  }

  console.log(str1.slice(startIdx, endIdx));

  return operations;
}


stepsToConvert('line1', 'line1'); // == 0
stepsToConvert('line1', 'line2'); // == 1
stepsToConvert('ine', 'line2'); // == 2
stepsToConvert('pline1', 'line2v'); // == 3
