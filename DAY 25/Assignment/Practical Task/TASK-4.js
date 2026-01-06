async function loadData () {
    console.log("LOading data");

    const data = await new Promise (resolve => {
        setTimeout(() => {
            resolve("Data Loaded")
        },2000)
    })
    console.log(data)
}


loadData()