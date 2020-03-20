// Given an array, arr, find the index of the lowest element
function getLowestIndex(start, arr) {
    lowestIndex = start;
    var i;
    for (i = start; i < arr.length; i++) {
        if (arr[i] < arr[lowestIndex]) {
            lowestIndex = i; 
        }
    }

    return lowestIndex;
}

function selectSort(arr) {
    var sorted = true;
    var currentIndex = 0; // index of where to put the current lowest number
    var lowIndex = 0;
    var low = arr[0];
    var currValue = arr[0];
    var i;
    for (i = 0; i < arr.length; i++) {
        lowIndex = getLowestIndex(i, arr); 
        low = arr[lowIndex];
        currentValue = arr[i];
        arr[lowIndex] = currentValue;
        arr[i] = low;
    }
    return arr;
}

names = [ 7, 2, 9, 8, 5, 4, 6, 1, 3];
// names = [ 7, 2, 9, 1, 5, 4, 6, 1, 3];
//names = [ 3, 8, 1, 8, 2, 8, 20 ];
console.log(selectSort(names));
// console.log(lowest(names.splice(3,6)));
//console.log(lowest(names));