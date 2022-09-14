var shoppingCart = {
    books: 6,
    sunglass: 3,
    keyboard: 5,
    mouse: 9,
    pen: 20
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// console.log(shoppingCart);
// console.log(penCount);

// alternate System
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
var propertyName = 'books';

var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);     // getting keys of a specific object as a string array
var propertyValues = Object.values(shoppingCart);       // getting values of a specific object as an array
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);


//set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 27;
console.log(shoppingCart);

shoppingCart[propertyName] = 10;
console.log(shoppingCart);