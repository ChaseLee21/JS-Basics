

console.log(1 | 2); //bitwise OR

// 1 = 00000001
// 2 = 00000010
// R = 00000011

console.log(1 & 2); //bitwise AND

// 1 = 00000001
// 2 = 00000010
// R = 00000000


//example

// Read, Write, Execute
// 00000100
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2; 
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);