
const output = [fizzBuzz(5), fizzBuzz(3), fizzBuzz(6), fizzBuzz(2), fizzBuzz(15), fizzBuzz(true)];
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    else if ((input % 3 === 0) && (input % 5 === 0)) return "FizzBuzz";
    else if (input % 3 === 0) return "Fizz";
    else if (input % 5 === 0) return "Buzz";
    else return input;
}