const sort = require('./sort');
const LL = require('./Linked-List/linked-lists');

/* 1 - Understanding merge sort

  a) 1, 21, 26, 45 | 29, 28, 2, 9 | 16, 49, 39, 27, 43, 34, 46, 40

  b) 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49

  c) [21], [1]

  d) [1, 21, 26, 45], [2, 9, 28, 29]

*/

/* 2 - Understanding quicksort

  after first partition: 
  [3, 9, 1, 14, 17, 24, 22, 20]

  1) The pivot could have been either 14 or 17 because the array is arranged in a correct order around them: everything to the left of those indices are less than the value, and everything to the right of them is greater than the value.

  2) Given: [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
    shoe the resulting list after second partitioning. 

    a) when using last item as pivot:
      1st: [[10, 3, 9], [12], [19, 14, 17, 16, 13, 15]]
      2nd: [[3],[9],[10],[12],[19, 14, 17, 16, 13, 15]]

    b) when using first item as pivot:
      1st: [[12,13,10,3,9],[14],[15,16,19,17]]
      2nd: [[[9,10,3],[12],[13]],[14],[15,16,19,17]]
  
*/

//3 - Implementing quicksort
// const testData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 8, 7, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


// console.log('Quick: ', sort.quickSort(testData));

//4 - Implementing merge sort 

//SEE sort.js mergeSort function.

// console.log('Merge: ', sort.mergeSort(testData));

//5 - Sorting a linked list using merge sort
function size(list) {
  if (!list) return ;
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    if(currNode !== null){
      currNode = currNode.next;
      counter++;
    }
  }
  return counter;
}

function makeList() {
  let testList = new LL();
  testList.insertLast(1);
  testList.insertLast(35);
  testList.insertLast(55);
  testList.insertLast(13);
  testList.insertLast(17);
  testList.insertLast(19);
  testList.insertLast(29);


  return testList;
}

function display(list) {
  let currNode = list.head;
  while(currNode.next !== null) {
    console.log('Node Contains: ', currNode.value);
    currNode = currNode.next;
  }
  console.log('Node Contains: ', currNode.value);
  console.log('End of list.');
}

// display(makeList());
const list2 = makeList();

function mergeSortLL(list) {
  if(size(list) <= 1) {
    return list;
  }
  
  let end = size(list);
  const mid = Math.round(end / 2);
  
  let midNode = list.findAt(mid); 
  

  let left = new LL();
  let right = new LL();
  right.head = midNode.next;
  midNode.next = null;
  left = list;

  right = mergeSortLL(right);
  left = mergeSortLL(left);
  return mergeLL(left, right);
}


function mergeLL(left, right) {
  let newLL = new LL();
  // compare value of left to value of right put lowest value into list.LL
  let leftNode = left.head;
  let rightNode = right.head;
  while(leftNode !== null || rightNode !== null) {
    if(leftNode === null) {
      newLL.insertLast(rightNode.value);
      rightNode = rightNode.next;
    }
    else if(rightNode === null) {
      newLL.insertLast(leftNode.value);
      leftNode = leftNode.next;
    }
    else if(leftNode.value < rightNode.value) {
      newLL.insertLast(leftNode.value);
      leftNode = leftNode.next;
    } else {
      newLL.insertLast(rightNode.value);
      rightNode = rightNode.next;
    }
    
  }
  return newLL;
}
// console.log(mergeLL(list2, list2));
// display(mergeLL(list2, list2));
console.log(mergeSortLL(makeList()));
display(mergeSortLL(list2));

//6 - Bucket Sort

/* O(n) algorithm to sort array of integers.  We know highest and lowest values.  no .splice(), shift(), or unshift(). */

<<<<<<< HEAD
function bucketSort(array) {
  const n = array.length / array[0];
  let buckets = [];

  for (let i = 0; i < n; i++) {
    buckets.push([]);
  }

  for (let i = 0; i < n; i++) {
    let bIn = n * array[i];
    buckets[bIn].push(array[i]);
  }

  for (let i = 0; i < n; i++) {
    sort.quickSort(buckets[i]);
  }

  let index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      array[index++] = buckets[i][j];
    }
  }
  return array;
}

const array = [0.9, 0.8, 0.5, 0.3, 0.2, 0.7, 0.1, 0.4, 0.6];

console.log(bucketSort(array));

sortNums([1,5,7,6,4,10,15,11,8], 15, 1);
//7 - Sort in place

/* Write a function that will shuffle an array into a random order in place (without creating a new array) */



//8 - Sorting books

/* Given 20 books. Sort them into alphabetical order. */

let books = [''];

function sortBooks(array, start=0, end=array.length) {

}

function partitionBooks(array, start, end) {

}

function swapBooks(array, i, j) {

}

