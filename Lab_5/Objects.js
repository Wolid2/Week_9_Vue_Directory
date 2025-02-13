// define am object representing a user name and password
let user = {username: 'Jasiri' ,Password: 'kittens'}
console.log(user)
console.log(user.username)
console.log(user.Password)
//  it will print the user object
console.log(user.Password)
console.log(user['Password'])
// storing a name in a variable
let whatProperty = 'Password'
console.log(user[whatProperty])
//  tyring to access the username property
let usernameProperty = 'username'
console.log(user[usernameProperty])
// updating a  password using a dot notation
user.Password = 'password'
console.log(user)
//  updating a  password using a bracket
user['Password'] = 'alligator'
console.log(user)
// Add a new property to the user object
user.email = 'johndoe@gmail.com'
console.log(user)
console.log(user.email)

