
// ojects are dynamic
// you can add properties to them
// you can delete properties as well

//establish object
const circle = {
    radius: 1
};


//add properties
circle.color = "yellow";
circle.draw = function() {
    console.log('draw');
};

console.log(circle); // check

//remove properites
delete circle.color;
delete circle.draw;

console.log(circle); //check