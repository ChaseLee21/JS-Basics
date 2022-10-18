
const movie = {
    title: "Pineapple Express",
    releaseYear: 2008,
    rating: 6.9,
    director: "Seth Rogen"
};
showProperties(movie);

function showProperties(obj) {
    for (let item in obj) {
        if (typeof obj[item] === 'string') {
            console.log(item, obj[item]);
        }
    }
}