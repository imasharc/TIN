// 1. Calculate the n-th number of the Fibonacci sequence
function fibonacci(n) {
  var num_1 = 0;
  var num_2 = 1;
  for (var i = 1; i < n; i++) {
    var tmp = num_1 + num_2;
    num_1 = num_2;
    num_2 = tmp;
  }
  return "Number " + n + " of the Fibonacci sequence is " + num_1 + "\n";
}

console.log(fibonacci(6));

// 2. Check if the provided string is a palindrome
function is_palindrome(str) {
  var reg = /[^A-Za-z0-9]/g;
  txt = str.toLowerCase().replace(reg, "");
  var len = txt.length;

  for (var i = 0; i < len / 2; i++) {
    if (txt[i] !== txt[len - 1 - i]) {
      return "Provided string '" + str + "' is not a palindrome.\n";
    }
  }
  return "Provided string '" + str + "' is a palindrome.\n";
}

console.log(is_palindrome("Was it a car or a cat I saw?"));

// 3. Determine the name of the type of the parameter provided to a function
function determineType(param) {
  // In JavaScript typeof null is an object but it is considered a bug. It should be null
  if (param === null) {
    return param + " is of type null";
  } else if (param === undefined) {
    return param + " is of type undefined";
    // Because you cannot determine if a JavaScript object is an array (or a date) by using typeof
    // therefore you may provide additional validation
  } else if (param.constructor === Array) {
    return param + " is of type Array(object)";
  } else if (param.constructor === Date) {
    return param + " is of type Date(object)";
  }
  return param + " is of type " + typeof param;
}

console.log(determineType() + "\n");

// 4. Convert natural numbers into collection of 'coin' values
function amountToCoins(num, coins) {
  var amount = [0, 0, 0, 0, 0];
  var tmp = num;
  if (tmp < 0) {
    console.error("Number cannot be negative!");
    return -1;
  }
  if (tmp - Math.floor(tmp) != 0) {
    console.error("You must provide a natural number!");
    return -1;
  }
  while (tmp > 0) {
    if (tmp - coins[0] > -1) {
      amount[0]++;
      tmp = tmp - coins[0];
    } else if (tmp - coins[1] > -1) {
      amount[1]++;
      tmp = tmp - coins[1];
    } else if (tmp - coins[2] > -1) {
      amount[2]++;
      tmp = tmp - coins[2];
    } else if (tmp - coins[3] > -1) {
      amount[3]++;
      tmp = tmp - coins[3];
    } else if (tmp - coins[4] > -1) {
      amount[4]++;
      tmp = tmp - coins[4];
    }
  }
  return (
    num +
    " can be represented as the following number of coins " +
    amount +
    " from the respectively ordered collection of " +
    coins
  );
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
