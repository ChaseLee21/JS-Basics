
showNumbers(100)


//  My way of doing it
// function showNumbers(limit){
//     let x = 0;
//     while (x <= limit){
//         let evenOdd = "Even";
//         if(x % 2 !== 0) evenOdd = "Odd";
//         console.log(x, evenOdd);
//         x++;
//     }
// }


//another way

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const evenOdd = (i % 2 === 0) ? "Even" : "Odd";
        console.log(i, evenOdd);
    }
}