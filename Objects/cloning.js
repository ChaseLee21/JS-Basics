//cloning objects

const circle = {
    radius: 1,
    draw: function draw() {
        console.log('draw');
    }
}

//example 1: for in loop
// const another = {};
// for (let key in circle){
//     another[key] = circle[key];
// }

//example 2: Object.assign
//const another = Object.assign({}, circle);

//example 3: Spread
const another = { ...circle };


console.log(another);