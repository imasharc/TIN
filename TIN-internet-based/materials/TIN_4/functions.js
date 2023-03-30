// 1. Calculate the n-th number of the Fibonacci sequence
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
console.log(
  "Number " + n + " of the Fibonacci sequence is " + fibonacci(n) + "\n"
);

// 2. Check if the provided string is a palindrome
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
console.log("Is '" + txt + "' a palindrome? " + is_palindrome(txt) + "\n");

// 3. Determine the name of the type of the parameter provided to a function
// TBA

// 4. Convert natural numbers into collection of 'coin' values
function amountToCoins(num, coins) {
  var amount = [0, 0, 0, 0, 0];
  if (num < 0) {
    console.error("Number cannot be negative!");
    return -1;
  }
  if (num - Math.floor(num) != 0) {
    console.error("You must provide a natural number!");
    return -1;
  }
  while (num > 0) {
    if (num - coins[0] > -1) {
      amount[0]++;
      num = num - coins[0];
    } else if (num - coins[1] > -1) {
      amount[1]++;
      num = num - coins[1];
    } else if (num - coins[2] > -1) {
      amount[2]++;
      num = num - coins[2];
    } else if (num - coins[3] > -1) {
      amount[3]++;
      num = num - coins[3];
    } else if (num - coins[4] > -1) {
      amount[4]++;
      num = num - coins[4];
    }
    return amount;
  }
}

var num = 46.54;
if (amountToCoins(num, [25, 10, 5, 2, 1]) === -1) {
  console.error("Some error occurred!");
} else {
  console.log(
    num +
      " can be represented as the following amount of coins " +
      amountToCoins(num, [25, 10, 5, 2, 1]) +
      " from the collection of " +
      [25, 10, 5, 2, 1]
  );
}
