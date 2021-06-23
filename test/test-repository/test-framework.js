numbersInArr = require('./arrfunction.js')


class Test {
constructor (outputval, expectedval){
  this.outputval = outputval;
  this.expectedval = expectedval;
}

  testFunction() {
    if (this.outputval === this.expectedval) {
      return true
    } else {
      return false
    }
  }

}



//let numbersArr = new numbersInArr(array)
//console.log(numbersArr.isEven())

module.exports = Test;
