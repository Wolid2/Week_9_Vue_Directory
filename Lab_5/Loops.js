//  define an array with different names
let birds = ['Owl', 'Robin', 'Eagle']
//  it will print the the birdes names
console.log(birds)

// it will loop over each bird in the array
birds.forEach(function(birds, index){
    console.log(index,birds.toUpperCase())


})
//  this the second way to loop over the array
for(let i=0; i<birds.length; i++){
    let bird = birds[i]
    console.log(bird.toUpperCase())

}