

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

// Sin desestructuración
// const {} = person
//
// console.log(person.name)
// console.log(person.age)
// console.log(person.codeName)

// Con desestructuración
const { age, name, codeName, power = 'No tiene poder'} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

// Sin desestructuracion
// const createHero = (person) => {
//   return {
//       id:1123416523,
//       name: person.name,
//       age: person.age,
//       codeName: person.codeName,
//       power: person.power
//   }
// }

// Con desestructuracion
// const createHero = ({ name, age, codeName, power }) => {
//   return {
//       id:1123416523,
//       name,
//       age,
//       codeName,
//       power,
//   }
// }

// Simplificado (sin el return)
const createHero = ({ name, age, codeName, power }) => (
     {
        id:1123416523,
        name,
        age,
        codeName,
        power,
    }
)

console.log( createHero( person ) )