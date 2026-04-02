function getPromise() {
  return new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}

async function handleAsync() {
  try {
    let result = await getPromise();
    document.getElementById("output").innerHTML = result;
  } catch (error) {
    document.getElementById("output").innerHTML = error;
  }
}

handleAsync();
