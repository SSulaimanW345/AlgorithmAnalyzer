export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
}
  
export function getBubbleSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++){
            animations.push([i, j]);
            animations.push([i, j]);
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                animations.push([j,array[j],i,array[i]]);
            }
            else {
                animations.push([j,array[j],i,array[i]]);
            }
        }
    }
    return animations;
}
export function getInsertionSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length;i++){
        let key = array[i];
        let j = i - 1;
        if (j >= 0 && array[j] < key) {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, array[i]]);
        }
        while (j >= 0 && array[j] > key) {
            animations.push([i, j]);
            animations.push([i, j]);
            array[j + 1] = array[j];
            animations.push([j+1,array[j]]);
            j--;
        }
        array[j + 1] = key;
        animations.push([i, j+1]);
        animations.push([i, j+1]);
        animations.push([j+1,key]);
    }
    return animations;
}
export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quicksortarr(array, 0, array.length - 1, animations);
    
    return animations;
}
function quicksortarr(array, low,high,animations) {
    if (low < high) {
        let pi = quicksortPartition(array, low, high,animations);
        quicksortarr(array,low,pi-1,animations);
        quicksortarr(array,pi+1,high,animations);
    }
}
function quicksortPartition(array,low,high,animations) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high; j++){
        
        if (array[j] < pivot) {
            i++;
            animations.push([j, high,i]);
            animations.push([j, high,i]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            animations.push([i, array[i], j, array[j]]);
        }
        else {
            animations.push([j, high,-1]);
            animations.push([j, high,-1]);
            animations.push([high,array[high],j,array[j]]);
        }
    }
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    animations.push([high, high,i+1]);
    animations.push([high, high,i+1]);
    animations.push([i+1,array[i+1],high,array[high]]);
    return (i+1);
}

export function getHeapSortAnimations(array) {
  const animations = [];
  for (let i = array.length / 2; i >=0;i--){
    heapify(array,array.length,i,animations);
  }
  for (let i = array.length - 1; i >= 0; i--){
    animations.push([0,i]);
    animations.push([0,i]);
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    animations.push([0,array[0],i,array[i]]);
    heapify(array, i, 0,animations);
  }
  return animations;
}
function heapify(arr,N, i,animations ) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < N && arr[left] > arr[largest])
  {
    largest = left;
    animations.push([largest, left]);
    animations.push([largest, left]);
    animations.push([largest,arr[largest], left,arr[left]]);
  }
  if (right < N && arr[right] > arr[largest])
  {
    largest = right;
    animations.push([largest, right]);
    animations.push([largest, right]);
    animations.push([largest, arr[largest], right, arr[right]]);
  }
  if (largest != i) {
    animations.push([largest, i]);
    animations.push([largest, i]);
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    animations.push([largest, arr[largest], i, arr[i]]);
    heapify(arr,N,largest,animations);
  }
}
export function getRadixSortAnimations(array) {
  const animations = [];
  const maxNum = array.reduce((a, b) => Math.max(a, b), -Infinity);
  //console.log(maxNum);
  //animations.push([maxNum]);
  for (let pass = 1; Math.floor(maxNum / pass) > 0; pass = pass * 10)
  {
    //console.log(pass);
    console.log(array);
    countSortRadix(array, array.length, pass, animations);
  }
  
  return animations;
}
function countSortRadix(arr, n,pass,animations) {
  let output =  new Array(n).fill(0); // output array
  let countarr = new Array(10).fill(0);
  //console.log(animations);
  for (let i = 0; i < n; i++) {
    console.log(Math.floor((arr[i] / pass)) % 10);
    countarr[Math.floor((arr[i] / pass)) % 10]++; animations.push([i]);animations.push([i]);
  }
  for (let i = 1; i < 10; i++) {
    countarr[i] += countarr[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
      output[countarr[Math.floor((arr[i] / pass)) % 10] - 1] = arr[i];
      countarr[Math.floor((arr[i] / pass)) % 10]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i]; animations.push([i,output[i]]);
  }

  //console.log(arr);
} 

export function getBucketSortAnimations(array) {
  const animations = [];
  let minVal = Infinity;
  let maxVal = -Infinity;
  array.forEach(element => {
    if (element < minVal) minVal = element;
    else if (element > maxVal) maxVal = element;
  });
  const bucketSize = 5;
  let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
  console.log(bucketCount);
  const Buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount;i++){
    Buckets[i] = [];
  }
  let i = 0;
  array.forEach(element => {
    Buckets[Math.floor((element - minVal) / bucketSize)].push(element);
    animations.push([i]);animations.push([i]);
    i++;
  });
  i = 0;
  Buckets.forEach(function(bucket) {
  	insertionSort(bucket);
  	bucket.forEach(function (element) {
      array.push(element);
      animations.push([i, element]);
      i++;
  	});
  });
  return animations;
}

function insertionSort(array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}
export function getCountingSortAnimations(array) {
  const animations = [];
  const max = array.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);
  let countarr =  new Array(max).fill(0);
  let output = new Array(max).fill(0);;
  const range = array.length;
  for (let i = 0; i < range;i++) { 
    countarr[array[i]]+=1;
    console.log(countarr);
    animations.push([i]);
    animations.push([i]);
  }
  for (let i = 1; i <= max; i++){
    countarr[i] += countarr[i - 1];
    //animations.push([i, i-1]);
  }
  for (let i = range-1; i>=0; i--) { 
    output[countarr[array[i]] - 1] = array[i];
    countarr[array[i]]--;
  }
  for (let i = 0; i<range; i++) {
    array[i] = output[i];animations.push([i,output[i]]);
  }

  return animations;
}