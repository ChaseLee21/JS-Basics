

const numbers = [1, 2, 3, 4, 2, 1, 1, 1]

const result = occurances(numbers, 1);

console.log(result);

function occurances(array, searchElement) {
/*     let occurances = 0
    array.forEach(element => {
        if (element === searchElement) occurances++;
    });
    return occurances; */

    return array.reduce((accumulator, current) => {
        console.log(accumulator, current);
        const occurances = (current === searchElement) ? 1 : 0
        return accumulator + occurances
    }, 0)

}