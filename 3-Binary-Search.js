// Write a function that takes a sorted array and a value
// return the index of the value in the array
// if value does not exist return -1
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
console.log(binarySearch([1,3,7,12,16,24,67,96,102,201,231], 24));

shbx