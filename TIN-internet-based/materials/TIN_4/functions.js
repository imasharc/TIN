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
