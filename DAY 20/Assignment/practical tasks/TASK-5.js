function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

Student.prototype.greet = function () {
    console.log("Hello, I am " + this.name);
};

const s1 = new Student("Arun", 1);
const s2 = new Student("Bala", 2);

s1.greet();
s2.greet();
