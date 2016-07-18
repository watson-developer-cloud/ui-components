'use strict';
// error catching to prevent gulp from crashing
module.exports = function(error) {
  // details of the error in console
  console.log(error);
  this.emit('end');
};
