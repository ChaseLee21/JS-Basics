// Reference types vs value types (primitives)
//value types are copied by value
//reference types are copied by their reference to memory

//value example
let example = 10;
let example2 = example;
example = 20;
console.log(example, example2);

//reference example
let example3 = {value: 2};
let example4 = example3
example3.value = 10;
console.log(example3, example4);

//another example

//because number is a primitive only the value 10 is copied into the increase function
//the value of number never changes because
//10 was copied into the function, increased to 11, then forgotten about.
let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number); 

//here I use a reference type instead 
//what gets thrown into the increment function is a reference to obj.value 
//because of this when the value gets incremented it saves in memory
let obj = {value: 10};

function increment(obj) {
    obj.value++;
}

increment(obj);
console.log(obj);

//Value types or primitive are
//number
//string
//boolean
//undefined / null

//Reference types are 
//object
//function
//array
