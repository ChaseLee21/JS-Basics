
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 4);

console.log(output);


function move(array, index, offset) {
    let number = array[index];
    let numberIndex = index;
    index += offset;
    if (index >= array.length || index < 0) {
        console.error('Incorrect Offset')
    } else {
        array.splice(numberIndex, 1);
        array.splice(index, 0, number);
        return array
    } 
}