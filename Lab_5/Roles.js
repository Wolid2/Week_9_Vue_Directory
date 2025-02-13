//  define an object
let user = {
    name: 'Johndoe',
    Password: '123456',
    Email: 'johndoe@gmail.com',
    Roles: ['Programmer', 'Developer'],
    Contact: {
        office: 'M1453',
        telephone: '1234456',
    }
}
//  adding a new object to the user object
user.salary = 2345
//  adding a new role to the existing user
user.Roles.push('Server admin')
//  adding a new location within the contact object
user.Contact.location = 'Minneapolis'

// it will print the updated object
console.log(user)