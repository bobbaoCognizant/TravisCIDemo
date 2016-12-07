'use strict'

module.exports = function(value) {
    if(typeof(value) != "number"){
      return 0;
    } else if(value < 5){
      return 5;
    } else if(value >= 5 && value <= 10) {
      return value;
    } else {
      return 10;
    }
}

