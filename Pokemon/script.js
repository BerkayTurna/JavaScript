const pokeApiURL = 'https://pokeapi.co/api/v2/';

//await kullanarak id ile pokemon çekme fonksiyonu
const getPokemonById = async (pokeId) => {
    try {
        const res = await fetch(`${pokeApiURL}pokemon/${pokeId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//pokemon ile ilgili istenen parametreleri çekme fonksiyonu
const createPokemonCard = (pokemonData) => {
    console.log(pokemonData.sprites.other.dream_world.front_default);
    console.log(pokemonData.id);
    console.log(pokemonData.name);
    pokemonData.types.forEach(
        (type) => console.log(type.type.name)
    )
};

//istenen limitlerle tüm pokemonları çekme fonksiyonu
const getAllPokemon = async (limit = 0, offset = 0) => {
    const res = await fetch(`${pokeApiURL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
};

getAllPokemon()
    .then(allPoke => console.log(allPoke));

//
getPokemonById(1)
    .then(pokemon => {
        createPokemonCard(pokemon)
    });

// fetch(`${pokeApiURL}pokemon/1`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("response not ok");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("fetch problemi: ", error);
//     })



// document.querySelector(".card p").innerHTML = "Artiz ne gezer la bazarda";