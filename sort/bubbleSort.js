function bubbleSort(arr) {
    var i;
    var prev = arr[0];
    var sorted = true;
    for (i = 1; i < arr.length; i++) {
        if (prev > arr[i]) {
            arr[i - 1] = arr[i];
            arr[i] = prev; 
            sorted = false;
        }
        prev = arr[i];
    }
    if (sorted) {
        return arr;
    }
    else {
        arr = bubbleSort(arr);
    }
}

names = [ 7, 2, 9, 1, 5, 4, 6 ];
bubbleSort(names)
console.log(names)