const address = {
    street: 'fairview',
    city: 'boise',
    zipCode: 83713
}

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);