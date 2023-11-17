
// Crea un arreglo de 100 posiciones vacías
// const arreglo = new Array(100)

// Los arreglos comienzan con la posicion 0
const arreglo = [1,2,3,4]

// Inserta un nuevo elemento sin afectar el espacio en memoria
arreglo.push( 5 )

// Crea la referencia y afecta el arreglo original
// const arreglo2= arreglo

// Crea un nuevo arreglo que copia el original pero no lo afecta
const arreglo2= [...arreglo]
// Inserta un nuevo elemento
arreglo2.push( 6 )

// .map regresa un nuevo arreglo
const arreglo3 = arreglo2.map( function ( n ){
    // Retorna o cambia su valor
    return 1
} )

// Inserta un nuevo valor
arreglo3.push(14)


// console.log(arreglo[0])
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

