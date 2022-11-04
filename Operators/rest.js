

console.log(sum(1, 2, 3, 5, 10, 20));

console.log(discountedItems(.2, 59.95, 29.95));

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b)
}

function discountedItems(discount, ...prices) {
    const preDiscountTotal = prices.reduce((a, b) => a + b);
    return preDiscountTotal * (1 - discount);
}