
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

//Anything that is not Falsy -> Truthy

console.log(false || true); //returns true
console.log(false || "chase"); //returns "chase"
console.log(false || 1);    //returns 1
console.log(false || 1 || 2);   //returns 1

//example

let userColor = "red"
let defaultColor = "blue"
let currentColor = userColor || defaultColor;
console.log(currentColor);
