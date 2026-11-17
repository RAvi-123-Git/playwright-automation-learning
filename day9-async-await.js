async function greet() {
    return "welcome to automation QA";
}

greet ().then ((message) => {
    console.log(message) 

});


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function displayData() {
    console.log("Starting...");

    let result = await getData();

    console.log(result);
    console.log("Completed!");
}

displayData();


let myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Automation task completed!");
    }, 3000);

});

async function runAutomation() {

    console.log("Automation started");

    let result = await myPromise;

    console.log(result);

    console.log("Automation completed");
}

runAutomation();


async function testLogin() {

    try {
        let result = await Promise.reject("Login failed!");

        console.log(result);

    } catch (error) {

        console.log("Error occurred:", error);

    }
}

testLogin();