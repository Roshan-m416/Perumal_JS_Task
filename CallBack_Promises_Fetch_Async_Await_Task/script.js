// Callback function
function processData(callback) {
    let message = "Processing done";
    callback(message);
}

processData(function(result) {
    document.getElementById("output").innerHTML = result;
});

// Promise
let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
});

// then and catch
myPromise
    .then(function(data) {
        document.getElementById("output").innerHTML += "<br>" + data;
    })
    .catch(function(error) {
        document.getElementById("output").innerHTML += "<br>" + error;
    });
