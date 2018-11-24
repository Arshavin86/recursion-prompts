/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n === 1 || n === 0)  {
    return 1;
  } else if (n < 0) {
    return null;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var result = 0;
  if (array.length === 0) {
    return 0;
  }
  result += array[0];
  return result += sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var result = 0;
  if (array.length === 0) {
    return 0;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      result += arraySum(array[i]);
    } else {
      result += array[i];
    }
  }
  return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 1) {
    return false;
  } else if (n === 0) {
    return true;
  } else if (n === -1) {
    return false;
  } else if (n > 1) {
    return isEven (n-2);
  } else {
    return isEven (n+2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var result = 0;
  if (n === 0 || n === 1) {
    return 0;
  } else if (n > 1) {
    result += n - 1;
    result += sumBelow (n-1);
  } else {
    result += n + 1;
    result += sumBelow (n+1);
  }
  return result;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  if ( y === x + 1 || y === x || y === x - 1) {
    return result;
  } else if ( x < y ) {
    result.push(x+1);
    return result.concat(range(x+1, y));
  } else {
    result.push(x-1);
    return result.concat(range(x-1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  var result = 1;
  if(exp === 0) {
    return 1;
  } else if (exp === 1) {
      return base;
  } else if(exp < 0) {
      return exponent(base, exp + 1) / base;
  } else if (exp % 2 !== 0){
      return exponent(base, exp - 1) * base;
  } else {
      return exponent(base, exp/2) * exponent(base, exp/2)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    return powerOfTwo (n/2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var result = '';
  if (string.length === 0) {
    return '';
  } else {
    result += string[string.length - 1];
    result += reverse(string.slice(0, -1));
  }
  return result;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  srting = string.replace(' ', '');
  if (string.length === 0) {
    return false;
  } else if (string.length === 1) {
    return true;
  } else if (string.length === 2 && string[0] === string[1]) {
    return true;
  } else if (string[0] === string[string.length - 1]){
    return palindrome(string.slice(1, string.length-1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === y || x === 0) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (x < y) {
      return x;
    } else {
      return modulo (x - y, y);
    }
  } else if (x > 0 && y < 0) {
    if (x + y < 0) {
      return x;
    } else {
      return modulo (x + y, y);
    }
  } else if (x < 0 && y < 0) {
    if (y - x < 0) {
      return x;
    } else {
      return modulo (x - y, y);
    }
  } else if (x < 0 && y > 0) {
    if (- x - y < 0) {
      return x;
    } else {
      return modulo (x + y, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var result = 0;
  if (x === 0 || y === 0) {
    return 0;
  } else if (x === 1) {
    return y;
  } else if (y === 1) {
    return x;
  } else if (x > 0 && y > 0) {
    result += x;
    return result += multiply (x, y-1);
  } else if (x > 0 && y < 0) {
    result += x;
    return result += multiply (x, y+1);
  } else if (x < 0 && y < 0) { // ?????????????? -2*-2 should return 4. But test shows 0 instead.
    result -= x;
    return result -= multiply (x, y+1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var result = 0;
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  } else if (x === y || x === 1) {
    return 1;
  } else if (y === 1) {
    return x;
  } else if (x > 0 && y > 0) {
    if (x < y) {
      return result;
    } else {
      result ++;
      return result += divide (x - y, y);
    }
  } else if (x < 0 && y > 0) {
    if (- x < y) {
      return result;
    } else {
      result ++;
      return result += divide (y - x, y);
    }
  } else if (x < 0 && y < 0) {
    if (x > y) {
      return result;
    } else {
      result ++;
      return result += divide (y - x, y);
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if ( x <= 0 || y <= 0) {
    return null;
  } else if (x > y) {
    if (x % y === 0) {
      return y;
    } else {
      return gcd (y, x % y);
    }
  } else if (x === y) {
    return x;
  } else {
    if (y % x === 0) {
      return x;
    } else {
      return gcd (x, y % x);
    }
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // if (str1.length !== str2.length) {
  //   return false;
  // }
  if (str1 === str2 && str1 === '') {
    return true;
  } else if (str1[0] === str2[0]) {
    str1 = str1.slice(1);
    str2 = str2.slice(1);
    return compareStr (str1, str2);
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var result = [];
  if (str.length === 0) {
    return result;
  } else {
    result.push(str[0]);
    return result.concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array[array.length-1]);
    array.pop();
    return result.concat(reverseArr(array));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 0) {
    return result;
  } else {
    result.push(value);
    return result.concat(buildList(value, length-1));
  }

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  var k;
  if (n === 0) {
    return result;
  } else {
    if (n % 5 === 0 && n % 3 === 0) {
      k = 'FizzBuzz';
    } else if (n % 3 === 0) {
      k = 'Fizz';
    } else if (n % 5 === 0) {
      k = 'Buzz';
    } else {
      k = n.toString();
    }
    result.push(k);
    return fizzBuzz(n - 1).concat(result);
  }

};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if (array.length === 0) {
    return count;
  } else if (typeof value === 'number' && !value === true && value !== 0) {
    if (typeof array[0] === 'number' && !array[0] === true && array[0] !== 0) {
      count ++;
    }
    return count += countOccurrence (array.slice(1), value);
  } else {
    if (array[0] === value) {
      count ++;
    }
      return count += countOccurrence (array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var newArray = [];
  var transferArray = array;
  if (array.length === 0) {
    return newArray;
  } else {
    newArray.push(callback(transferArray[0]));
    return newArray.concat(rMap(transferArray.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj) {
    if (k === key) {
      count ++;
    }
    if (typeof obj[k] === 'object') {
      count += countKeysInObj (obj[k], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var k in obj) {
    if (obj[k] === value) {
      count ++;
    }
    if (typeof obj[k] === 'object') {
      count += countValuesInObj (obj[k], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var k in obj) {
    if (typeof obj[k] === 'object') {
      replaceKeysInObj (obj[k], oldKey, newKey);
    }
    if (k === oldKey) {
      obj[newKey] = obj[k];
      delete obj[k];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var array = [0, 1];
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return array;
  }
  if (n > 1) {
    array.push(array[array.length-1] + array[array.length-2]);
    return array.concat(fibonacci(n-1));
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  newArray.push(array[0].toUpperCase());
  return newArray.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  var string = array[0];
  string = string.charAt(0).toUpperCase() + string.slice(1);
  newArray.push(string);
  return newArray.concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]
    }
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      newArray.push(array[i]);
    }
    if (typeof array[i] === 'object') {
      newArray.concat(flatten(array[i]));
  }
}
  return newArray;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var obj = obj || {}
  if (str.length === 0) {
    return obj;
  }
  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]] += 1;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var array = [];
  if (list.length === 0) {
    return array;
  }
  if (list.length === 1) {
    array.push(list[0]);
    return array;
  }
  // input: [1,2,2,3,4,4,5,5,5]
  // output: [];
  // 1 !== 2 ==>  [1]; recurse ([2,2,3,4,4,5,5,5])
  // 2 === 2 ==> recurse ([2,3,4,4,5,5,5])
  // 2 !== 3 ==> [2] recurse ([3,4,4,5,5,5])
  // 3 !== 4 ==> [3] recurse ([4,4,5,5,5])
  // 4 === 4 ==> recurse ([4,5,5,5])
  // 4 !== 5 ==> [4] recurse ([5,5,5])
  // 5 === 5 ==> recurse ([5,5])
  // input.length === 1 ==> [5]
  if (list[0] !== list[1]) {
    array.push(list[0])
  }
  return array.concat(compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
   var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  array[0].push(aug);
  newArray.push(array[0]);
  return newArray.concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeros to a single 0.
// minimizeZeroes([2,0,0,0,1,1,4]) // [2,0,1,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  if (array.length === 1) {
    newArray.push(array[0]);
    return newArray;
  }
  if (array[0] !== 0) {
    newArray.push(array[0]);
  } else if (array[0] !== array[1]) {
    newArray.push(array[0]);
  }
  return newArray.concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  if (array.length === 1) {
    if (array[0] < 0) {
          newArray.push(array[0]*-1);
    } else{
      newArray.push(array[0]);
    }
    return newArray;
  }
  if (array[0] > 0 && array[1] > 0) {
    newArray.push(array[0]);
    newArray.push(array[1]*-1);
  } else if (array[0] > 0 && array[1] < 0){
    newArray.push(array[0]);
    newArray.push(array[1]);
  } else if (array[0] < 0 && array[1] < 0) {
    newArray.push(array[0]*-1);
    newArray.push(array[1]);
  } else {
    newArray.push(array[0]*-1);
    newArray.push(array[1]*-1);
  }
  return newArray.concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // create an object with key-value pairs: digit: word ("5": "five")
  var digits = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };
  var converted = '';
  // check if str[0] === object key, if it does ==> concat object value with an output str;
  if (str.length === 0) {
    return converted;
  }
  if (digits.hasOwnProperty(str[0])) {
    converted = converted.concat(digits[str[0]]);
    // console.log(digits[str[0]])
  } else {
    converted = converted.concat(str[0]);
  }
  // recurse with sliced str.
  return converted.concat(numToText(str.slice(1)));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) { // How can it work with 1 argument?!!!!!!
  var count = 0;
  if (node.localName === tag) {
    count ++;
  }
  if (node.children.length === 0) {
    return count;
  }

  for (var i = 0; i < node.children.length; i++) {
    if (node.children[i].localName === tag) {
      count ++;
    }
    if (node.children[i].children.length !== 0) {
      return count + tagCount(tag, node.children[i]);
    }
  }
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  //input: array = [1,2,3,4,5,6]; target = 4, min && max = undefined;
//1 step: minimum = 0, maximum = 5; array[Math.floor((minimum+maximum)/2)] = 2 < target; recurse (array, target, 2, 5)
// 2 step: minimum = 2, maximum = 5; array[Math.floor((minimum+maximum)/2)] = 4 = target; return 3;
  var index;
  var minimum = min || 0;
  var maximum = max || array.length-1;

  if (array[minimum] === target) {
    return minimum;
  } else if (array[maximum] === target) {
    return maximum;
  } else if (maximum - minimum === 1) {
    return null;
  }

  if (array[Math.floor((minimum+maximum)/2)] === target) {
    return Math.floor((minimum+maximum)/2);
  } else {
    if (array[Math.floor((minimum+maximum)/2)] > target) {
      return binarySearch (array, target, minimum, Math.floor((minimum+maximum)/2));
    } else {
      return binarySearch (array, target, Math.floor((minimum+maximum)/2), maximum);
    }
  }
};


// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var array = [];
    if (input.length === 0) {
      return array;
    }
    for (var i = 0; i < input.length; i++) {
      if (typeof input[i] !== 'object' ) {
        array.push(input[i])
      } else {
        array.push(clone(input[i]));
      }
    }
    return array;
  } else {
    var obj = {};
    if (Object.keys(input).length === 0) {
      return obj;
    }
    for (var key in input) {
      if (typeof input[key] === 'number') {
        obj[key] = input[key];
      } else {
        obj[key] = clone(input[key]);
      }
    }
    return obj;
  }
};

