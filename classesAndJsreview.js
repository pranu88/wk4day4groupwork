// =================================
// Creating Classes & Factories
// =================================
// Hamster
// attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

// class Hamster {
//     constructor(name){
//         this.name = name    
//         this.owner = ""
//         this.price = 15
//     }
//     wheelRun(){
//         console.log('squeak squeak')
//       }
//       eatFood(){
//         console.log('nibble nibble')
//       }
//       getPrice(){
//         return this.price
//       }
//     //   setOwner(person){
//     //     this.owner = person.name
//     //     return this.owner
//     // }
      
// }

// //==================
// // person class
// // =================

// class Person {
//     construcot(name){
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters = []
//         this.bankAccount = 0

//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     getWeight(){
//         return this.weight
//     }
//     greet(){
//         console.log(`hello! ${this.name}`)
//     }
//     eat(){
//         this.weight++
//         this.mood++
//     }
//     exercise(){
//         this.weight--
//     }
//     ageUp(){
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount += 10
//     }
//     buyHamster(hamster){
//         this.hamsters.push(hamster)
//         this.mood += 10
//         this.bankAccount -= hamster.getPrice()
//     }
   
// }
// const person = new Person("Timmy")
// for(let i = 0; i <5 ;i++){
//     person.ageUp()
// }
// for(let i = 0; i <5 ;i++){
//     person.eat()
// }
// for(let i = 0; i <5 ;i++){
//     person.exercise()
// }
// for(let i =0; i < 9 ; i++){
//     person.ageUp()
// }
 
// // create hamster object
// const hamster1 = new Hamster("Gus")

// // hamster.setOwner()
// hamster1.owner = "Timmy"
// person.buyHamster()
// for(let i =0; i < 15 ; i++){
//     person.ageUp()
// }
// person.eat()
// person.eat()
// person.exercise()
// person.exercise()

// console.log(person)


