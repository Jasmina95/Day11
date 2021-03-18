// Only change code below this line
function mySplice(arr1, arr2, n) {
  var firstArr = [...arr1];
  var secondArr = [...arr2];

  for (var i = firstArr.length - 1; i >= 0; i--) {
    secondArr.splice(n, 0, firstArr[i]);
    n++;
  }
  return secondArr;
}
// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
