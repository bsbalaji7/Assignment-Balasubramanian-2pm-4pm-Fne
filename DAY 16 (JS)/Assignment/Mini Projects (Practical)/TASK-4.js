const logs = [  //Array used
    {
        name: "Bala",
        age: 20 ,
        course: "JFS",
        country: "Chennai",
        goal: "Web Developer",
    },//Person 1 details
    {
        name: "Jhonny",
        age: 20 ,
        course: "JFS",
        country: "Chennai",
        goal: "Web Developer",
    },//Person 2 details
    {
        name: "Ali",
        age: 20 ,
        course: "JFS",
        country: "Chennai",
        goal: "Web Developer",
    },//Person 3 details
    {
        name: "Dani",
        age: 19 ,
        course: "JFS",
        country: "Chennai",
        goal: "Web Developer",
    },//Person 4 details
    {
        name: "Funk",
        age: 20 ,
        course: "JFS",
        country: "Chennai",
        goal: "Web Developer",
    },//Person 5 details
]

console.log(logs) //print all the Person details

logs.forEach (log =>{
    console.log(log.name)  // print all the names from the array 
    console.log(log.course) // print all the course in the array
})