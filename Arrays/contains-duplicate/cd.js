"use strict";
exports.__esModule = true;
// return false if list does not contain duplicate and true if it does
var numsExample1 = [1, 2, 3, 1];
var numsExample2 = [1, 2, 3, 4];
var numsExample3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
var numsExample4 = [1, 1, 2, 3, 1];
function containsDupValue(numArr) {
    var checkList = [];
    for (var i = 0; i < numArr.length; i++) {
        if (checkList.includes(numArr[i])) {
            break;
        }
        checkList.push(numArr[i]);
    }
    return checkList.length !== numArr.length;
}
console.log(containsDupValue(numsExample1));
console.log(containsDupValue(numsExample2));
console.log(containsDupValue(numsExample3));
console.log(containsDupValue(numsExample4));
