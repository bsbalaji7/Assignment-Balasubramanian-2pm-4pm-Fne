const age = [1,2,3,4,10,20,22,33,44]

const Adults = age.filter(function(num){
    return num >= 18 
})

console.log(Adults)