// it will print hello world
console.log("Hello World!")

//  naming a variable using let
let color = 'blue'
// not recommended to use
var color2 = 'green'
const language = 'javascript'


//  naming a variable using number
let quantity = 5
//  naming a variable using a text
let text = 'Hello World!'
//  Concatenating the string
console.log('There are ' + quantity + ' programmers')
//  naming a variable for today temperature in Fahrenheit
let todayTemp = 75
//  it will print the temperature in Fahrenheit
console.log("Today's temperature is " + todayTemp + 'f' )


// Converting Fahrenheit to Celsius
let tempC = (todayTemp - 32)  * 5/9
//  it will print a temperature in Fahrenheit
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'f' )
console.log(`Today\'s temperature is  ${tempC.toFixed(2)}C`)
// naming a variable using a class details
let className = 'Web programming'
let classCode = 2560
let department = 'ITEC'
// it will print the class information using template
console.log(`This class is ${department} ${classCode} ${className}`)