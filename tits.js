// let
let age = 27;
console.log(age);
age = 28;
console.log(age)
age = 28 * 5;
console.log(age)
age = 'fuck off';
console.log(age)


// const
const mikesAge = 27;
console.log(mikesAge);
// mikesAge = mikesAge + 1;
// console.log(mikesAge);

// ==========
// Types
// ==========
// number, int or float 543565.65
const myInt = 100;
const myFloat = 3.8;
console.log(myInt / myFloat)


// string
const myName = 'Paulina';
console.log(myName)
const mySecondName = 'Kazimierek';
const myFullName = `my name is ${myName} ${myFloat}`;
console.log(myFullName)

// bool
true / false
1 / 0 
const paulinaIsAging = true;
if (paulinaIsAging) { console.log(`she old - ${paulinaIsAging}`) }


// null and undefined
let penis = 'huge';
penis = null;
console.log(penis)


// array
// const myNames = []
// console.log(myNames.length)
// const myNames = ['paulina', 'izabella', 'kazimierek', 23, true, false, 3.4, { }]
// myNames[2] = 'oconnell'
// console.log(myNames)

// object

console.log('==============================================')
const dog = {
    name: 'gypsy',
    age: 5,
    breed: 'springer',
    temperament: 'pissy'
}

const dogs = [
    {
        name: 'gypsy',
        age: 5,
        breed: 'springer',
        temperament: 'pissy'
    },
    {
        name: 'oggy',
        age: 0,
        breed: 'gsd',
        temperament: 'best boi'
    },
    {
        name: 'poopy',
        age: 8,
        breed: 'rottie',
        temperament: 'fucking adorable'
    }
]

const dogsWithUpper = dogs.map((dog) => ({
    ...dog,
    name: dog.name.toUpperCase(),
    gay: true,
}))
console.log(dogsWithUpper)

dogsWithUpper.forEach((dog) => console.log(`hello my name is ${dog.name} i am ${dog.age} i am a ${dog.temperament} ${dog.breed} Gay? ${dog.gay}`))


// console.log(`hello my name is ${dog.name} i am ${dog.age} i am a ${dog.temperament} ${dog.breed}`)