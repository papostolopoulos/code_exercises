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
  var testStr = "";

  if (str1.length < str2.length) {operations = str2.length - str1.length; return operations};
  if (str1.length > str2.length) {operations = str1.length - str2.length; return operations};

  for (var i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) !== -1) {
      testStr += str1[i];
      i++;
      break;
    }
  }

  console.log(str2.indexOf(testStr));

  while (str2.indexOf(testStr) !== -1) {
    testStr += str1[i];
    i++;
  }
  testStr = testStr.slice(0, testStr.length - 1);
  console.log(testStr);

  operations += str1.indexOf(testStr);
  str1 = str1.slice(str1.indexOf(testStr));
  console.log(str1);

  //Perhaps a for loop starting from testStr.length and compare letters one by one.
  // +1 when a letter is replaced
  // +1 when an extra letter is added

  return operations;
}


stepsToConvert('line1', 'line1'); // == 0
stepsToConvert('line1', 'line2'); // == 1
stepsToConvert('ine', 'line2'); // == 2
stepsToConvert('pline1', 'line2v'); // == 3
