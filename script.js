// const pokemons = [
//     { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//     { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//     { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//     { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//     { nome: 'Squirtle', tipo: 'água', vida: 45 },
//     { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ];

// ------------------
// PRÁTICA GUIADA I
// A)
// const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function triplicar(array) {
    const arrayTriplicada = [];
    for (let numero of meusNumeros) {
        const numeroTriplicado = numero * 3;
        arrayTriplicada.push(numeroTriplicado);
    }
    return arrayTriplicada;
}
// console.log(triplicar(meusNumeros));
// ------------------

// b)
function retornaPares(arrayDeNumeros) {
    const arrayDePares = [];
    for (let numero of arrayDeNumeros) {
        if (numero % 2 === 0) {
            arrayDePares.push(numero);
        }
    }
    return arrayDePares;
}
// console.log(retornaPares(meusNumeros));

// 2)
function manipulaNumeros(arrayDeNumeros, callback) {
    const novoArray = callback(arrayDeNumeros);
    return novoArray;
}
// ---------
// console.log('TRIPLICANDO', manipulaNumeros(meusNumeros, triplicar));
// console.log('PARES', manipulaNumeros(meusNumeros, retornaPares));

// const multiplicaPor3 = (num)=>{
//   return num * 3;
// }

// const multiplicaPor3 = meusNumeros.map((num) => {
//     return num * 3;
// });

// const retornaPares = meusNumeros.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(multiplicaPor3);
// console.log(retornaPares);
// ---------

// PRÁTICA GUIADA II - map()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
    return elemento * 3;
});

// console.log(numerosTriplicados);

// PRÁTICA GUIADA III - filter()
const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {
    return elemento % 2 === 0;
});

// console.log(numerosPares);

// EXERCÍCIO DE FIXAÇÃO
const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
];

// function defineVidaCheia(poke){
//   return poke.vida === 100;
// }
// console.log(defineVidaCheia(pokemons));

// const iteracao = pokemons.map((elemento)=> {
//   const pokemonsVidasCheias = []
//   const pokeCheia = elemento.vida === 100;
//   pokemonsVidasCheias.push(pokeCheia)
//   return pokemonsVidasCheias
// })
// console.log(pokemonsVidasCheias)

// FIXAÇÃO:
// 1
function completaVida(poke) {
    poke.vida = 100;
    return poke;
}
// console.log(completaVida(pokemons[0]));

//------
// const ObjetoQualquer ={
//   nome: 'mazzi',
//   tipo: 'ser humano'
// }
// console.log(completaVida(ObjetoQualquer))
//------

// 2
const pokemonsVidasCheias = pokemons.map(completaVida);
console.log(pokemonsVidasCheias);

// 3
const pokemonsDeFogo = pokemons.filter((pokemon) => {
    return pokemon.tipo === 'fogo';
});
console.log(pokemonsDeFogo);