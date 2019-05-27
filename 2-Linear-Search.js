// Write a function that accepts an array and a value
// that checks if the value is contained in the array
// return -1 if not
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 7));
