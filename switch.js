const color = 'red';
console.log('Result using if-else if-else: ');
if (color === 'green') {
    console.log('color is green');
}
else if (color === 'blue') {
    console.log('color is blue');
}
else if (color === 'red') {
    console.log('color is red');

}
else if (color === 'yellow') {
    console.log('color is yellow');
}
else if (color === 'white') {
    console.log('color is white');

}
else if (color === 'black') {
    console.log('color is black');

}
else {
    console.log('no color');
}

// switch
console.log('Result using switch-case: ');
switch (color) {
    case 'green':
        console.log('color is green');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    case 'black':
        console.log('color is black');
        break;
    default:
        console.log('no color');
        break;
}