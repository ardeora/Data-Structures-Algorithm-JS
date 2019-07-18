(function IIFE() {

    function bubbleSort(arr) {
        for(let i = arr.length; i > 0; i--) {
            let swapped = false;
            for(let j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
        return arr;
    }

    function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    }

    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let currentVal = arr[i];
            let reqInd = i - 1;
            for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
                arr[j + 1] = arr[j];
                reqInd--;
            }
            arr[reqInd + 1] = currentVal;
        }
        return arr;
    }
    
    let test = [4,2,3,1,0,5,11,-5]
    console.log("Bubble Sort: ",bubbleSort(test));
    console.log("Selection Sort: ",selectionSort(test));
    console.log("Insertion Sort: ",insertionSort(test));

    function merge(arr1, arr2) {
        let i = 0;
        let j = 0;
        let results = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j]);
                j++;
            }
        }
        while(i < arr1.length) {
            results.push(arr1[i]);
            i++;
        }
        while(j < arr2.length) {
            results.push(arr2[j]);
            j++;
        }
        return results;
    }
    console.log("Merge: ", merge([2,4,6,8],[1,3,5,6,7]));

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = mergeSort(arr.slice(0,mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left,right);
    }
    console.log("Merge Sort: ",mergeSort(test));
})();

