

//enumerating properties of an object
let circle = {
    radius: 1,
    draw: function draw() {
        console.log('draw');
    }
}

//example one: for in loop
for (let key in circle) {
    console.log(key, circle[key]);
}


//example two: for of loop
//here I have to reference Object.keys property to get the keys of circle
//I have to do the same to get each key's value
for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let entries of Object.entries(circle)) {
    console.log(entries);
}

//checking if a property in an object exists
if ('radius' in circle) console.log('yes');