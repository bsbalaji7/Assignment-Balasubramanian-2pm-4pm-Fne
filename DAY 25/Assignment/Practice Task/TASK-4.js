let MyPromise = new Promise (function(resolve, reject) {
    resolve("Promised solved")
})

MyPromise.then(function(messgae){
    console.log(messgae)
})