

const nombre = 'Diana'
const apellido = 'Roldan'

// const nombreCompleto = nombre + ' ' + apellido
// Expresion de JS va entre {}
// const nombreCompleto = `${nombre} ${apellido}`

// console.log(nombreCompleto)

// Expresion JS
// console.log(`Resultado: ${ 4 + 1 }`)

function getSaludo( nombre ){
    return 'Hola ' + nombre
}

// Template literal
console.log(`Esto es un texto: ${ getSaludo(nombre) }`)