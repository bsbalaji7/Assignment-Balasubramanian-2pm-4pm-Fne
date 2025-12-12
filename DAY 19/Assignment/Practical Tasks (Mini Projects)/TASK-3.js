function mrks(Mark){
if (Mark >= 90) {
return " Your Grade is A"
} else if (Mark >= 80) {
    return "Your Grade is B"
 } else if (Mark >= 70) {
    return "Your Grade is C"
 } else if (Mark >= 50) {
    return "Your Grade is D"
 } else {
    return "Your Grade is F"
 }
}
console.log(mrks(87))