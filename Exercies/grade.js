
const scores = [80, 80, 50];

console.log(calculateGrade(scores));

function calculateGrade(scores) {
    const average = averageNumber(scores);

    if (average === 0) return "No scores exist"
    else if (average >= 90) return "A"
    else if (average >= 80) return "B"
    else if (average >= 70) return "C"
    else if (average >= 60) return "D"
    else return "F"
}

function averageNumber(numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}