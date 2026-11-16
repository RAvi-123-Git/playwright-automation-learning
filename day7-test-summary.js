let testResults = [
    { testName: "Login Test", status: "Pass" },
    { testName: "Search Test", status: "Fail" },
    { testName: "Logout Test", status: "Pass" },
    { testName: "Payment Test", status: "Fail" },
    { testName: "Registration Test", status: "Pass" },
    { testName: "Profile Test", status: "fail" }
];

function displayTestSummary() {
    let total = testResults.length;
    let passedTests = testResults.filter(test => test.status.toLowerCase() === "pass");
    let failedTests = testResults.filter(test => test.status.toLowerCase() === "fail");

    console.log("Total test cases:", total);
    console.log("Passed tests:", passedTests.length);
    console.log("Failed tests:", failedTests.length);
    console.log("Passed test names:", passedTests.map(test => test.testName));
    console.log("Failed test names:", failedTests.map(test => test.testName));
    console.log("Summary:", `Total ${total}, Passed ${passedTests.length}, Failed ${failedTests.length}`);
}

displayTestSummary();
