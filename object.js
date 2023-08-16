// Object declaration

const aboutSelf = {
    name:'Mainul Islam',
    age:27,
    qulification:'BCA',
    otherQulification:'Bed',
    workExprience:'Data Entry Operator'
}

console.log(aboutSelf);

// object property
const property = Object.keys(aboutSelf);
console.log(property);

// object values
const values = Object.values(aboutSelf);
console.log(values);

// when you know the property name then you get object value like dot (.) notation
var qulification = aboutSelf.qulification;
console.log(qulification);

// when you know the property name then you get object value by []

var otherQulification = aboutSelf['otherQulification'];
console.log(otherQulification);

// other process

var age = age;
var result = aboutSelf['age'];
console.log(result);

// set value by object using dot (.) notation, propertName

aboutSelf.age = 29;
aboutSelf['workExprience']= 2;

var name = 'Najiya Islam';
aboutSelf['name'];

console.log(aboutSelf);
