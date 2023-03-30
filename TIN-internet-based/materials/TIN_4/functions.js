// Calculate the n-th number of the Fibonacci sequence
function fibonacci(n) {
  var num_1 = 0;
  var num_2 = 1;
  for (var i = 1; i < n; i++) {
    var tmp = num_1 + num_2;
    num_1 = num_2;
    num_2 = tmp;
  }
  return num_1;
}

var n = 43;
console.log(n + "th number of the Fibonacci sequence is " + fibonacci(n));

// Check if the provided string is a palindrome
function is_palindrome(txt) {
  var reg = /[^A-Za-z0-9]/g;
  txt = txt.toLowerCase().replace(reg, "");
  var len = txt.length;

  for (var i = 0; i < len / 2; i++) {
    if (txt[i] !== txt[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

var txt = "A man, a plan, a canal. Panama";
console.log(txt + " is a palindrome: " + is_palindrome(txt));
