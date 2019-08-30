function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
  
}

function reverseString(string) {

  if (string.length > 1) {
    let reversed = string.substr(string.length - 1, 1) + reverseString(string.substring(0, string.length - 1))
    return reversed
  } else {
    return string
  }

}

function isPalindrome(string) {
  
  if(string.length > 1) { 
    return isPalindrome(string.substring(1, string.length - 1)) && string.substr(0, 1) === string.substr(string.length - 1, 1)
  } else {
    return true
  }

}

function addUpTo(arr, idx) {

  if (arr.length > 1) {
    return arr[idx] + addUpTo(arr.slice(0, idx), idx - 1)
  } else {
    return arr[idx]
  }
}

function maxOf(arr) {

  if (arr.length > 1) {
    let max = maxOf(arr.slice(1))
    return arr[0] > max ? arr[0] : max
  } else {
    return arr[0]
  }
}

function includesNumber(arr, target){

  if (arr.length > 1){
    return includesNumber(arr.slice(1), target) || arr[0] === target
  } else { 
    if (arr[0] === target) return true
  }

}