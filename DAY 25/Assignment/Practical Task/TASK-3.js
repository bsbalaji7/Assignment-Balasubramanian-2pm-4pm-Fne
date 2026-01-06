function fakeApi(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Data received")
        },2000)
    })
}

fakeApi().then(result => console.log(result));