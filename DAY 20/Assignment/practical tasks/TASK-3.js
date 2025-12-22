class student {
    constructor(name,rollNo){
        this.name=name;
        this.rollNo=rollNo
    }
    display(){
        console.log("Name :"+ this.name +", RollNo: " + this.rollNo)
    }
}
const s1 = new student ("Leo",69);
const s2 = new student ("Das",90);
const s3 = new student ("BS",7);

s1.display()
s2.display()
s3.display()