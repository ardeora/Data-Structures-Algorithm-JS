class SortLib {
  constructor(){
  }

  bubbleSort(array) {
    var noSwaps;
    for (var i = array.length; i > 0 ; i--) {
      noSwaps = true;
      for (var j = 0; j < i - 1; j++) {
        if (array[j] > array[j+1]) {
          var temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) {
        break;
      }
    }
    return array;
  }

}
