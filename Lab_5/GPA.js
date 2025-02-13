//  creating a function to check if a GPA is valid
function validGPA(gpa){
    // checking if the GPA is within the valid range
    if (gpa >= 0 && gpa <= 4){
        //  it will return true if the GPA is valid
        return true
    } else{
        //  return false if gpa is out of range
        return false
    }
}
//  printing with different GPA values
console.log(validGPA(1000))
console.log(validGPA(0))
console.log(validGPA(10))
console.log(validGPA(4))
console.log(validGPA(3.5))
console.log(validGPA(-1))