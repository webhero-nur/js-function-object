var shoppingCart = {
    books: 6,
    sunglass: 3,
    keyboard: 5,
    mouse: 9,
    pen: 20,
    shoes: 2,
    bottle: 1
}

const shoppingCartKeys = Object.keys(shoppingCart);
console.log(shoppingCartKeys);

const shoppingCartValues = Object.values(shoppingCart);
console.log(shoppingCartValues);

var shoppingCartKey = '';
var shoppingCartKeyValue = 0;
// normal for loop
for (let i = 0; i < shoppingCartKeys.length; i++) {
    shoppingCartKey = shoppingCartKeys[i];
    shoppingCartKeyValue = shoppingCartValues[i];
    console.log(shoppingCartKey, ':', shoppingCartKeyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, ':', value);
}