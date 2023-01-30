function increment(arr, value) {
    let newArr = [];

  for (let i = 0; i < arr.length; i++){
    newArr.push({val: arr[i].val + value}) 
  }
  return newArr;
}

module.exports = increment
