// Function declaration

function fun(){
    console.log('Hi this function');
    console.log('this new topic!');
}
fun();

// Use Function Parameter

function  para(num) {
    console.log(num);
}
para(12);

// use Multi-parameter

function add(num1, num2, num3, num4){
    console.log(num1, num2, num3, num4);

    var sum = num1 + num2 + num3 + num4;
    console.log(sum);
}
add(12, 10, 5, 8);


// return 

function addition(num1, num2, num3){
    var sum = num1 + num2 + num3;
    return sum;
}

var a = 20;
var b = 30;
var c = 40;
var result = addition(a, b,c);
console.log(result);
