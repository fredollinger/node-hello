function isPalindrome(st) {

    var i;
    for (i=0; i < st.length/2; i++) {
        console.log(st[i]);
        if (st[i] != st[st.length - i - 1]) {
           return false; 
        }
    }
    return true;
}

var st="nurses run";
//var st="bob";
//console.log(st.length/2);
console.log(isPalindrome(st));