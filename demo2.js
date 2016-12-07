'use strict'

module.exports = function(value) {
    if(typeof(value) != "number"){
      return 0;
    } else if(value < 10){
      return 10;
    } else if(value >= 10 && value <= 100) {
      return value;
    } else {
      return 100;
    }
}

