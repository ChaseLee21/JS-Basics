
//Factory Function
function createAddress (street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

const another = createAddress('Ustick', 'Meridian', 83642);
console.log(another)

//Constructor Function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address = new Address('a', 'b', 123);
console.log(address);