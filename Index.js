function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new Address('a', 'b', 123);
const address2 = new Address('a', 'b', 123);

function areEqual(address1, address2) {
    for (let key in address1) {
        if(address1[key] !== address2[key]){
            return false
        }
    }
    return true;
}

function areSame(address1, address2) {
    if (address1 === address2) return true
    return false
}

console.log(areEqual(address1, address2), areSame(address1, address1));
