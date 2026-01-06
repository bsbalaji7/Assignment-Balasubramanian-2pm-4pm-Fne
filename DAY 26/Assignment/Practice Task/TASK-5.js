function getData() {
    return new Promise((resolve) => {
        resolve("Promise resolved successfully!");
    });
}

async function run() {
    let result = await getData();
    console.log(result);
}

run();
