
console.log(showPrimes(20));

function showPrimes(limit) {
    for (let i = 2; i < limit; i++) {
        if (checkPrime(i)) console.log(i)
    }
}


//checks if a number is prime
function checkPrime (num) {
    for (let i = 2; i < num; i++) { //loops starting at 2 ends 1 before number being checked
        if (num % i === 0) return false //if divisible evenly by any number returns false
    }
    return true //returns true otherwise
}