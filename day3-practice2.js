let number =5;
for(let i=1; i<=10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let marks = 45;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let loginStatus = true;

if (loginStatus === true) {
    console.log("Login test passed");
} else {
    console.log("Login test failed");
}

let testCases = [
    "Login Test",
    "Search Test",
    "Registration Test",
    "Logout Test",
    "Profile Test"
];

for (let test of testCases) {
    console.log(`Executing: ${test}`);
}