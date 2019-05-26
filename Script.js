function reverse(str){
  if(str.length === 1){
    return str;
  } else {
    var len = str.length;
    return str[len-1] + reverse(str.substring(0,len-1));
  }
}

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

const isOdd = val => val % 2 !== 0;

console.log(reverse('Awesome'));
console.log(isPalindrome('tacocat'));
console.log(someRecursive([11,6,8], val => val < 10));




