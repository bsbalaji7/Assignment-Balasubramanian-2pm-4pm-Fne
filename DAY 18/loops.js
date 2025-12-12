//condtions 
// checks only 1 condition
//runs only when condtions is true 



// looops 
// allows repeating code multiple time to repeat

//for(inizillization , condition, increment){
  //  block of code
//}

for(let a =1 ; a<=10; a++){
console.log(a)
}

//while loop

let i = 1;
while (i <= 5){
  console.log(i)
  i++
}


//for_of

const fruits = ["apple","banana", "guva","kiwi","pine"]
for (let bs of fruits){
  console.log(bs)
}

//for in 

const user = {
  name : "leo",
  age:23,
  wife:"sathiya"

}

for(let key in user){
  console.log(key, user[key])
}