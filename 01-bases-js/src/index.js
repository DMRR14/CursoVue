

// Importaciones

// import { owners } from './data/heroes'

// console.log( owners )

// const [ dc, marvel ] = owners

// console.log( dc )
// console.log( marvel )

import superHeroes, {owners} from './data/heroes'

// console.log(superHeroes)


const getHeroeById = (id) => {
    return superHeroes.find( hero => hero.id === id )
}

console.log(getHeroeById(2))

const getHeroesByOwner = ( owner ) => superHeroes