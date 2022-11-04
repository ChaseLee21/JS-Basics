

const numbers = [1, 2, 3, 4];

const maxNumber = max([-10, 2, 4, 0, 20]);

console.log(maxNumber);


function max(array) {
    return array.reduce((a, b) => (a > b) ? a : b);
}







// let result = array[0];
// array.forEach(element => {
//     return (element > result) ? result = element : result;
// });
// return result;