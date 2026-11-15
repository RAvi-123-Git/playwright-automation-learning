let tester ={
    name: "ravi",
    company: "Accenture",
    location: "Bangalore"
};
console.log (tester.name);
console.log (tester.company);
console.log (tester.location);

let jsonData = JSON.stringify(tester);
console.log(jsonData);

let convertedData = JSON.parse(jsonData);
console.log(convertedData);
console.log(convertedData.name);
console.log(convertedData.company);
console.log(convertedData.location);

let testCases = [
    {
        testName: "Login Test",
        username: "admin",
        status: "Pass",
        browser: "Chrome"
    },
    {
        testName: "Search Test",
        username: "user1",
        status: "Fail",
        browser: "Firefox"
    },
    {
        testName: "Logout Test",
        username: "admin",
        status: "Pass",
        browser: "Edge"
    }
];

for (let test of testCases) {
    console.log("Test Name:", test.testName);
    console.log("Username:", test.username);
    console.log("Status:", test.status);
    console.log("Browser:", test.browser);
    console.log("----------------------");
}
 let { name, company, location } = tester;

 console.log(name);
 console.log(company);
 console.log(location);


 let updatedTester = {
    ...tester,
    experience :3,
    automationToll: "Playwright"

 };

 console.log(updatedTester);
 
 let tool = "Playwright Automation";
 console.log(tool.toUpperCase());
console.log(tool.toLowerCase());
console.log(tool.includes("Playwright"));
console.log(tool.startsWith("Play"));
console.log(tool.length);