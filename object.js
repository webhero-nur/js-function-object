var student = {
    id: 2791,
    name: 'Nure Alom',
    class: 16,
    marks: 89
}

var mobile = {
    brand: 'Redmi (Xiaomi)',
    model: 'Note 9s',
    price: 23990,
    storage: '128GB',
    camera: '48MP',
    battery: '5020mAh'
}

var myComputer = {
    brand: 'DCL',
    price: 35000,
    color: 'Silver',
    processor: 'i3 10th gen'
}

console.log(myComputer);
console.log(myComputer.price);
console.log(myComputer.processor);
myComputer.processor = 'i3-10100U';
console.log(myComputer.processor);

// console.log(mobile.brand);
// console.log(student.name);