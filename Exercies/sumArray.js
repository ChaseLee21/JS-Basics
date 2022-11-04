
//Whiteboard exercise
//create a sum() function that returns the sum of all passed arguments
//should also allow an array to be passed instead of x amount of arguments


const array = [1, 2, 5, 12, 20, 100];

console.log( sum(array) );


//This was my first attempt at solving this problem
//it works its just hard to understand whats happening.
// function sum(...numbers) {
//     for (let number of numbers) {
//         if (Array.isArray(number)) {
//             return number.reduce((a, b) => a + b)
//         } else {
//             return numbers.reduce((a, b) => a + b)
//         }
//     }
// }


//another way of doing this
//much easier to understand what is happening
function sum(...numbers) {
    if (Array.isArray(numbers[0]) && numbers.length === 1)
        numbers = [...numbers[0]]
    return numbers.reduce((a, b) => a + b)
}