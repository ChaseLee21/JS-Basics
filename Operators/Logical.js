
//Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); //returns true
console.log(true && false) //returns false
console.log(false && false); //returns false


//example
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = (highIncome && goodCreditScore);

console.log(eligibleForLoan);


//Logical OR (||)
//Returns TRUE if one of the operands is TRUE

let eligibleForLoanOR = (highIncome || goodCreditScore);

console.log(eligibleForLoanOR);


//NOT (!)
let applicationRefused = !eligibleForLoan;

console.log("application refused " + applicationRefused);