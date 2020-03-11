// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

function sort(arr) {
  var i;
  var prev = arr[0];
  console.log(prev);
  for (i = 0; i < arr.length; i++) {
      if (arr[i] > prev) {
          console.log(arr[i]);
          prev = arr[i];
          continue;
      }
      else {
          prev = arr[i];
      }
  }
  return arr[0];
}

names = [ 1, 1, 1, 1, 2 ];
sort(names);
