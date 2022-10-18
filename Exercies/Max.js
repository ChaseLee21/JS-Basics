
// FIRST VERSION
// function max(x, y) {
//     let result = undefined;
//     result = x - y;
//     if(result === 0){
//         return x;
//     } else if (result < 0) {
//         return y;
//     } else return x;
// }


// SECOND VERSION
// function max(x, y) {
//     if (x > y) return x;
//     return y;
// }


function max(x, y) {
    return (x > y) ? x : y;
}

console.log(max(69, 69));
console.log(max(24, 69));
console.log(max(420, 69));