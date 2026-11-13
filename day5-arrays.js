let testcases = [
    {name: "Login test", status: "Pass"},
    {name: "Logout test", status: "Fail"},
    {name: "Search test", status: "Pass"},
    {name: "Filter test", status: "Fail"},
    {name: "Register test", status: "Pass"}
];
let passedtests = testcases.filter(test => test.status === "Pass");
let failedtests = testcases.filter(test => test.status === "Fail");
let count = testcases.length;
let print = `total test cases:${count}, passed: ${passedtests.length}, failed: ${failedtests.length}`;
console.log(print);
console.log("Passed tests:", passedtests);
console.log("Failed tests:", failedtests);
console.log("Total test cases:", count);


let tools = ["Playwright", "Cypress"];
tools.push("Selenium");
tools.pop();
console.log("Tools after push and pop:", tools);

let numbers = [32,324,23,2,23,];
let result = numbers.map ((num) => num * 2);
console.log(result);

// let numbers = [372,23482,273492,27394729];
// let filteredNumbers = numbers.filter((num) => num > 100000);
// console.log(filteredNumbers);

let browsers = ["Chrome", "Firefox", "Safari"];
let chromeBrowsers = browsers.filter((browser) => browser.startsWith("C"));
console.log("Chrome browsers:", chromeBrowsers);



let statuses = ["Pass", "Fail", "Pass", "Fail"];

let passedCount = statuses.reduce((count, status) => {
    if (status === "Pass") {
        return count + 1;
    }
    return count;
}, 0);

console.log("Passed test cases:", passedCount);
