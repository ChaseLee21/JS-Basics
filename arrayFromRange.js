

const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange (min, max) {
    let array = [];
    while (min <= max) {
        array.push(min);
        min++;
    }
    return array
}