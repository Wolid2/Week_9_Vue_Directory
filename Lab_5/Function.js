//  converting  a string to upper case and adding a !
function shout (text){
    // convert the input text to upper case
    let Shouty_text  = text.toUpperCase() + '!!!'
    return Shouty_text
}
//  it will print hello world
console.log(shout('hello world'))
// naming a variable and print it
let message = shout ('hello web programmers')
console.log(message)
// function to convert Fahrenheit to Celsius
function f_to_c(f, decimalPlaces) {
    // it will convert Fahrenheit to Celsius
    let celsius = (f - 32) * 5 / 9
    if(decimalPlaces ){
        //  it will convert the number to a string with fixed
        return celsius.toFixed(decimalPlaces)
    }else {
        return celsius
    }

}
// defining the temperature in fahrenheit
let todayTemp = 75
// covert the temperature to Celsius with 3 decimals places
todayCelsis = f_to_c(todayTemp, 3)
//  it will print the converted Fahrenheit temperature
console.log(todayTemp)