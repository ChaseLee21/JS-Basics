

const array = [1, 'a', 2, 'b', 3, 4, 'c', 5, 6, 'd', 7, 8, 9, 'chase', 'chase'];

console.log(except(array, ['a', 'b', 'c', 'd', 'chase']));

function except (array, excludes) {
    let result = [];
    array.forEach(element => {
        if (!excludes.includes(element)) {
            result.push(element)
        }
    });
    return result;
}
