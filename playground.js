function addTwoFewTimes(num, counter) {
  while (counter > 0) {
    num += 2
    counter -= 1
  }
  return num;
}


function addTwoFewTimes(num, counter){
  num += 2
  counter -= 1
  if (counter === 0) {
    return num;
  }
  addTwoFewTimes(num, counter);
}
