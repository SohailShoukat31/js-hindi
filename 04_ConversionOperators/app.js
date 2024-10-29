let myNumber = "33";
console.log(myNumber); // String
console.log(typeof myNumber);
let checkType = Number(myNumber);
console.log(checkType); // Number
console.log(typeof checkType);

let abc = "33abc";
let checkIt = Number(abc);
console.log(checkIt);

// "33" convert into 33
// "33abc" convert into NaN
// true converted into 1
// false converted into 0;

let trueValue = 1;
let checkValue = Boolean(trueValue);
console.log(checkValue); // true
console.log(checkValue);

let falseValue = 0;
let checkValue2 = Boolean(falseValue);
console.log(checkValue2);

let emptyValue = "";
console.log(emptyValue);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log( typeof stringNumber);
