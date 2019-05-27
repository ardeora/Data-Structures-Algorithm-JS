// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.
function reverse(str){
  if(str.length === 1){
    return str;
  } else {
    var len = str.length;
    return str[len-1] + reverse(str.substring(0,len-1));
  }
}

// Write a recursive function called isPalindrome 
// which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str){ 
  if(str.length <= 1) {
    return true;
  } else {
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.substring(1, str.length - 1))
    } else {
      return false;
    }
  }
}

// Write a recursive function called someRecursive 
// which accepts an array and a callback. The function returns true 
// if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.
function someRecursive(arr,callback){
  console.log(arr);
  if (arr.length === 0) {
    return false;
  } else {
    if (callback(arr[0])) {
      return true;
    } else { 
      arr.shift()
      return false || someRecursive(arr, callback);
    }
  }
}

// Write a recursive function called flatten which accepts an array of arrays 
// and returns a new array with all values flattened.

function flatten(arr){
  var finalArray = [];

  function helper(arr) {
    if (!Array.isArray(arr)) {
      return finalArray.push(arr);
    } else {
      if (arr) {
        
      }
    }
  }
}

console.log(reverse('Awesome'));
console.log(isPalindrome('tacocat'));
console.log(someRecursive([11,6,8], val => val < 10));




