function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr, arr[i], arr[j]);            
            if (arr[j] < arr[i]) min = j;
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let test = [4,2,3,1,5,9,8];

console.log(selectionSort(test));