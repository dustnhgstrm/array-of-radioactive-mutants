/******************
 * YOUR CODE HERE *
 ******************/

function addMeToEnd(arr) {
  return arr.push("Colin");
}

function addMeToStart(arr) {
  return arr.unshift("Colin");
}

function changeLast(arr, value) {
  arr.pop();
  arr.push(value);
}

function changeAllValuesTo(arr, value) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
}

function oddOrEven(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "even";
    } else {
      arr[i] = "odd";
    }
  }
}

function changeNextThreeToValue(index, arr, value) {
  for (let i = index; i < index + 3; i++) {
    arr[i] = value;
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof addMeToEnd === "undefined") {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === "undefined") {
  addMeToStart = undefined;
}

if (typeof changeLast === "undefined") {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === "undefined") {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === "undefined") {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === "undefined") {
  changeNextThreeToValue = undefined;
}

module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
};
