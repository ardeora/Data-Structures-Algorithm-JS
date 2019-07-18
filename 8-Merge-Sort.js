function merge(arr1, arr2) {
    let final = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            final.push(arr1[i]);
            i++;
        } else {
            final.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        final.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        final.push(arr2[j]);
        j++;
    }

    return final;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

let test = [4,2,3,1,5,9,8];

console.log(mergeSort(test));
