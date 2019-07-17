function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let swapped = false;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {break;}
    }
    return arr;
}

let test = [8,1,2,3,4,5,6,7];

console.log(bubbleSort(test));
