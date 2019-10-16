function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    return reverseString(myString.substr(1)) + myString[0];
  }
  return myString;
};

function isPalindrome(str) {
  if (str.length > 1) {
    return str[0] === str.substr(str.length - 1) ? isPalindrome(str.substring(1, str.length - 1)) : false;
  }
  return true;
};

function addUpTo(arr, i) {
  if (i !== 0) {
    let num = arr.shift();
    return addUpTo(arr, i - 1) + num;
  } else {
    return arr[0];
  }
};

function maxOf(arr) {
  if (arr.length > 1) {
    let max = maxOf(arr.slice(1))
    return max > arr[0] ? max : arr[0]
  } else {
    return arr[0];
  }
}

function includesNumber(arr, n) {
  if (arr.length > 1) {
    return arr[0] === n ? true : includesNumber(arr.slice(1), n)
  }
  return false;
}