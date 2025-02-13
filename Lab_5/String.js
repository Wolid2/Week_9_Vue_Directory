// Define a string that contains name with lower case
let text = 'the classes are itec 1150, itec 1250, itec 2560'
// it will replace with current of 'itec' with 'ITEC'
let replaced = text.replace('itec','ITEC')
console.log(replaced)

// it will replace all the of 'itec' using a global regex which is (/itec/g)
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)
// define another string containing class number without 'itec'
let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace (/\d{4}/g,'ITEC $&')
console.log(replaceRegex)