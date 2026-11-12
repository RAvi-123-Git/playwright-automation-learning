function addnumbers(a,b){
    console.log("Addition;",a+b);
}
addnumbers(10,20);
addnumbers(100,200);

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);
console.log(result);

function reversestring(str){
    return str.split("").reverse().join("");
}
let reversedstring = reversestring("ravipuppala os learing playwright");
console.log("reversed string:",reversedstring);

function findmax(a,b,c){
    return Math.max(a,b,c);
}
input = findmax(10,20,30);
console.log("max value is:",input);

function greetTester(name = "Tester") {
    console.log(`Hello ${name}`);
}

greetTester("Ravi");
greetTester();

let checkevenorodd = (Number) => {
    return Number % 2 === 0;
};
console.log(checkevenorodd(10));
console.log(checkevenorodd(15));
