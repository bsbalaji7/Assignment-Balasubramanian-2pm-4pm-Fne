let marks = 82;
let grade, remark;

if (marks >= 90) {
    grade = "A";
    remark = "Excellent";
} else if (marks >= 75) {
    grade = "B";
    remark = "Very Good";
} else if (marks >= 50) {
    grade = "C";
    remark = "Pass";
} else {
    grade = "F";
    remark = "Fail";
}

console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Remark:", remark);

