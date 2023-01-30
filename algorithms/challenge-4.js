function withdraw(amount) {
    let hundred = 0;
  let fifty = 0;
  let twenty = 0;

  while (amount >= 20){
    if (amount >= 100){
      amount -= 100
      hundred++
    }
    else if ( amount >= 50){
      amount -= 50
      fifty++
    }
    else {
      amount -= 20
      twenty++
    }
  }
  return [hundred, fifty, twenty]
}

module.exports = withdraw