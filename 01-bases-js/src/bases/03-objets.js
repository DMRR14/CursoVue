

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523123,
        let: 14.3232,
        lng: 34.456842
    }
}

// Copia lo del objeto persona
// const persona2 = persona
/* Al modificar persona2 se cambia directamente el objeto persona ya que ocupa el mismo espacio en memoria */
// persona2.nombre = 'Peter'

// Crea un nuevo objeto persona2 que esparce las propiedades de persona sin modificar el obeto originak usando el operador spread ...
const persona2 = {...persona}

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)