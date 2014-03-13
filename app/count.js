if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
  	stop : false,
    count : function (start, end) {
    	for (var i = start; i <= end; i++) {
    		if (!this.stop) {
    			console.log(i);
    		} else {
    			break;
    		}
    	};
    	return this;
    },
    cancel : function () {
    	this.stop = true;
    	return true;
    }
  };
});