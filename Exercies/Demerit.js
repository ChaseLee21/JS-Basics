

result = checkSpeed(71);
console.log(result);


function checkSpeed(speed) {
    let overLimit = Math.floor(speed) - 70;
    let points = (overLimit - (overLimit % 5)) / 5;
    if (points <= 0) return "ok";
    return (points >= 12) ? "License Suspended" : "Points: " + points;
}