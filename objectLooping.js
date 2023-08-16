var shoppingCart = {
    mobile:10,
    sunglass:20,
    laptop:12,
    headphone:11
}

var keys = Object.keys(shoppingCart);
console.log(keys)

var values = Object.values(shoppingCart);
console.log(values);

// for loop 

for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop

for (var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value)
}