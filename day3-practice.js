874298;

let number = -2532487293
if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


if (number % 2 === 0) {
    console.log("the number is even");
} else {
    console.log("the number is odd");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let value =7;
for(let i=1; i<=10; i++){
    console.log(`${value} * ${i} = ${value * i}`);
    console.log(`the value of i is ${i}`);
};
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

let tools = ["playwrright", "seleleiunm","cypress"];
for (let tool of tools){
    console.log(tool);

}

let testCases = [
    "Login Test",
    "Registration Test",
    "Search Test",
    "Payment Test",
    "Logout Test"
];

for (let test of testCases) {
    console.log(`Executing: ${test} data`);
}

let usernames = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5"

];
for (let username of usernames){
    console.log(`Executing test for;${username}`);
}