function numSwap(number) {
    let result = '';
  let num = number.toString();

  for (let i = 0; i < num.length; i += 2){
    result += num[i + 1]
    result += num[i]
  }
  return result;
}

module.exports = numSwap
