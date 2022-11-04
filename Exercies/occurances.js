

const numbers = [1, 2, 3, 4, 2, 1, 1, 1]

try {
    const result = occurances(true, 1);
    console.log(result);
} catch (error) {
    console.log(error);
}


function occurances(array, searchElement) {
    if (!Array.isArray(array)) 
        throw new Error('Not an array');

    return array.reduce((accumulator, current) => {
        const occurances = (current === searchElement) ? 1 : 0
        return accumulator + occurances
    }, 0)

}