
/**
 * The function bubbleSearch is defined with two parameters: arr (the input array) 
 * and target (the value to search for).
 */
function bubbleSearch(arr, target) {
  /**
   * Three variables are initialized: maxIndex (the maximum index of the array),
   * end (the end index for the bubble sort algorithm), and swapped 
   * (a flag to indicate if any swaps were made during the bubble sort). 
   */
  var maxIndex = arr.length - 1;
  var end = maxIndex;
  var swapped = true;
  /**
   *  A while loop is used to perform the bubble sort.
   *  The loop continues as long as swapped is true
   *  (i.e., there were swaps made during the previous iteration).
   *  Inside the loop, a for loop is used to compare adjacent elements
   *  in the array and swap them if necessary
   *  (i.e., if the current element is greater than the next element).
   *  If a swap is made, swapped is set to true to indicate that the
   *  loop should continue. 
   */
  while (swapped) {
    swapped = false;
    for (var i = 0; i < end; i++) {
      if (arr[i] > arr[i+1]) {
        // Swap elements
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;

        swapped = true;
      }
    }
    end--;
  }

  /**
   * After the bubble sort is complete,
   * a binary search is performed to find the index of the target
   *  value in the sorted array. A while loop is used to continue
   *  the search as long as start is less than or equal to maxIndex.
   *  Inside the loop, the middle index is calculated using the formula
   *  Math.floor((start + maxIndex) / 2). If the middle element is equal
   *  to the target, the function returns the index of the middle element.
   *  If the middle element is less than the target, the search continues
   *  in the right half of the array (by setting start to mid + 1).
   *  If the middle element is greater than the target, the search continues
   *  in the left half of the array (by setting maxIndex to mid - 1). 
   */
  var start = 0;
  while (start <= maxIndex) {
    var mid = Math.floor((start + maxIndex) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      maxIndex = mid - 1;
    }
  }

  // Target not found
  return -1;
}


// Test

let myArray = [12, 10, 3, 7, 4];

console.log(bubbleSearch(myArray, 10))
