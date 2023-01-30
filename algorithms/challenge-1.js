function missingNumber(numArr) {
        let newArr = [];
      
        for (let i = 1; i <= 9; i++) {
          if (!numArr.includes(i)) 
          newArr.push(i);
        }
        if (newArr.length === 1) { 
          return newArr[0];
        } 
        else if (newArr.length > 1) { 
          return newArr.sort();
        } 
        else {
          return false;
        }
}

module.exports = missingNumber
