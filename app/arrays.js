if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        };
        return result;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
            }
        };
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i -= 1;
            }
        };
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                result++;
            }
        };
        return result;
    },

    duplicates : function(arr) {
        var dup = [], counter = [];
        for (var i = 0; i < arr.length; i++) {
            counter[arr[i]] = (counter[arr[i]] > 0) ? counter[arr[i]] += 1 : 1;
        }
        for (var i in counter) {
            if (counter[i] > 1) {
                dup.push(i);
            }
        };
        return dup;
    },

    square : function(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * arr[i]);
        }
        return newArr;
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                result.push(i);
            }
        }
        return result;
    }
  };
});
