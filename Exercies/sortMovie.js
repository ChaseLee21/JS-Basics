

const array = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]

console.log(sortMovies(array));

function sortMovies(array) {
    for (let i = 0; i < array.length;) {
        if (array[i].year < 2018 || array[i]. rating < 4) {
            array.splice(i, 1);
        } else i++;
    }
    return array.sort((a, b) => {
        return (a.rating > b.rating) ? -1 : 1;
    });
}