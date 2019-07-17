function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = i;
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

let test = [4,2,3,1]
console.log(insertionSort(test));
