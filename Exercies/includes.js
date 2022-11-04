

const array = [1, 'a', 'chase', 4, 6, 8]

console.log(includes(array, 'a'))

function includes (array, searchElement) {
    for (let element of array)
        if (element === searchElement) return true
    return false; 
}