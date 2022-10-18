

const array = [1, 2, 3, "", 5, undefined]
console.log(countTruthy(array));


function countTruthy(array) {
    let count = 0;
    for (let item of array) {
        if (item) count++;
    }
    return count;
}