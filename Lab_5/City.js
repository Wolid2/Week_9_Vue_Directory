// creating a function for the city and state into a string
function cityStateAddress(city, state){
    // converting state into uppercase letter
    state = state.toUpperCase();
    // creating  address string
    address = city + ' ' + state
    //  it will return formatted string
    return address
//  calling a function with city and state
}
address = cityStateAddress('Minneapolis', 'mn')
//  it will print address
console.log(address)


// calling a function to format city and state using template
function CityStateAddress(city, state){
    //  converting state to uppercase letter
    state = state.toUpperCase();
    //  creating address string with coma separator
    address = `${city}, ${state}`
    //  it will return the address
    return address
}
//  calling a function again with city and state
address = cityStateAddress('Minneapolis', 'mn')
address = cityStateAddress('SEATLE', 'WA')
console.log(address)