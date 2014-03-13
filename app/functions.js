if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        this.greeting = obj.greeting;
        this.name = obj.name;
        return fn.call(this);
    },

    functionFunction : function(str) {
        
        this.resultStr = function (str2) {
            return str + ", " + str2;
            
        };
        return this.resultStr;
    },

    makeClosures : function(arr, fn) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            var arrFn = function () {
                var finalFn = fn(arr[i]);
                i++;
                return finalFn;
            }
            result.push(arrFn);
        }
        i = 0;
        return result;
    },

    partial : function(fn, str1, str2) {
        return function (str) {
            return fn(str1, str2, str);
        }
    },

    useArguments : function() {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    },

    callIt : function(fn) {
        var func = fn;
        [].shift.apply(arguments);
        return func.apply(this, arguments);

    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
        var allArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(this, allArgs);
      };
    },

    curryIt : function(fn, n) {
      if (typeof n !== 'number') {
        n = fn.length;
      }

      function curryFn(oldArgs) {
        return function(arg) {
          var args = oldArgs.concat(arg);
          if (args.length < n) {
            return curryFn(args);
          } else {
            return fn.apply(this, args);
          }
        };
      }
      return curryFn([]);
    }
  };
});
