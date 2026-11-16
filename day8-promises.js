let myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Automation task completed!");
    }, 2000);

});

myPromise.then((message) => {
    console.log(message);
});