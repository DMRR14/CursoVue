
// Función con argumento
// function saludar( xyz ) {
//     return `Hola ${ xyz }`
// }

// Forma tradicional y más segura función almacenada en una constante
// const saludar = function ( xyz ) {
//     return `Hola ${ xyz }`
// }

// Función de flecha
// const saludar = ( xyz ) => {
//     return `Hola ${ xyz }`
// }

// Función de fleche simplificada
// const saludar = ( xyz ) => `Hola ${ xyz }`
// Función de flecha con un valor po defecto
const saludar = ( nombre = 'Peter' ) => `Hola ${ nombre }`

const nombre = 'Tony'

// console.log( saludar( nombre ) )

// En esta funcion de flecha está retornando un objeto y sin el return lo puede confundir con el cuerpo de la funcion, para solucionarlo se usan paréntesis

// const getUser = () => { // retorna objeto
//   return {
//       uid: 'ABC123', username: 'Tony001'
//   }
// }

// Simplificado
// const getUser = () => {
//     uid: 'ABC123',
//     username: 'Tony001'
// } // Incorrecto
const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
}) // Correcto

// console.log( getUser() )

const heroes = [{
    id:1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

// Busca en el arreglo heroes si existe un id que coincida con el 1
// const existe = heroes.some( ( heroe ) => heroe.id === 1 )
// Busca una coincidencia pero si no la encuentra devuelve undefine
// const existe = heroes.find( ( heroe ) => heroe.id === 1 )

// Desestructuración de objetos
const { id , name} = heroes.find( ( heroe ) => heroe.id === 1 )

// Con la desestructuración no es necesario llamar al heroe y su atributo (heroe.id, heroe.name)
console.log( name, id )