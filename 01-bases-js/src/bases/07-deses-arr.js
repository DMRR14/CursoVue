const characters = ['Goku', 'Vegeta', 'Trunks']

// const goku = characters[0]
// const vegeta = characters[1]
// const trunks = characters[2]

const [ g, v, t, goten = 'No tiene valor' ] = characters

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [ letters, numbers ] = returnArray(['XYZ',987])

console.log( letters, numbers )