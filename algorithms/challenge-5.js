function arraySum(arr1, arr2) {
    let sumArr = [];
    let j = 0;
  
    for (let i = 0; i < arr1.length; i++){
      if (j > arr2.length - 1)
      j = 0;
      sumArr.push(arr1[i] + arr2[j])
      j++
    }
    return sumArr
}

module.exports = arraySum
