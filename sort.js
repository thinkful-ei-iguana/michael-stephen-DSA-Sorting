//// Bubble Sort ////
const sorts = {
  swap: function(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  },
  
  bubbleSort: function(array) {
    let swaps = 0;
    for (let i = 0; i < array.length -1; i++) {
      if (array[i] > array[i + 1]) {
        this.swap(array, i, i + 1);
        swaps++;
      }
    }
    if (swaps > 0) {
      return this.bubbleSort(array);
    }
    return array;
  },
  
  
  //// Merge Sort ////
  
  mergeSort: function(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
  
    left = this.mergeSort(left);
    right = this.mergeSort(right);
    return this.merge(left, right, array);
  },
  
  merge: function(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
      if(left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
      }
      else {
        array[outputIndex++] = right[rightIndex++];
      }
    }
    for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
    }
    for (let i =rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
    }
    return array;
  },
  
  
  //// QUICKSORT ////
  
  quickSort: function(array, start = 0, end = array.length) {
    if (start >= end) {
      return array;
    }
    const middle = this.partition(array, start, end);
    array = this.quickSort(array, start, middle);
    array = this.quickSort(array, middle + 1, end);
    return array;
  },
  
  partition: function(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end -1; i++) {
      if (array[i] <= pivot) {
        this.swap(array, i, j);
        j++;
      }
    }
    this.swap(array, end - 1, j);
    return j;
  }
};

module.exports = sorts;
