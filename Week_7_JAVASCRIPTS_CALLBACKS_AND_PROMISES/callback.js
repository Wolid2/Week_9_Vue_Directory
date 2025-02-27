let animals = ['Giraffe', 'Elephant', 'Yat']
animals.forEach(function(animal, index){
    console.log(animal,index)
})
//  Arrow function notation
animals.forEach((animal, index) =>{
    console.log(animal, index)

})
animals.forEach( (animal) => {
    console.log(animal)
})
// without an arrow function
animals.forEach (function  (animal) {
    console.log(animal)
})