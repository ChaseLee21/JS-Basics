//for-in loop
//mainly used with objects

//Dot Notation
// person.name

//Bracket Notation
// person['name']


//example with object
const person = {
    name: 'chase',
    age: 21
}
for (let key in person)
    console.log(key, person[key]);



//example with array
//a better way to do this is with for-of loop instead
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(index, colors[index]);
}