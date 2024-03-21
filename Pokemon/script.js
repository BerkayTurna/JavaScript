const pokemonApiURL = 'https://pokeapi.co/api/v2/';

//await kullanarak id ile pokemon çekme fonksiyonu
const getPokemonById = async (...pokemonId) => {
    try {
        const res = await fetch(`${pokemonApiURL}pokemon/${pokemonId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//pokemon ile ilgili istenen parametreleri container oluşturup içine yazdırma
const createPokemonCard = (pokemonData) => {
    // console.log(pokemonData.sprites.other.dream_world.front_default);
    // console.log(pokemonData.id);
    // console.log(pokemonData.name);
    // pokemonData.types.forEach(
    //     (type) => console.log(type.type.name)
    // )

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("pokemon-card");
    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemonData.sprites.other.dream_world.front_default;
    cardContainer.appendChild(pokemonImg);
    const pokemonNumName = document.createElement("h2");
    pokemonNumName.textContent = `#${pokemonData.id} ${pokemonData.name}`;
    cardContainer.appendChild(pokemonNumName)
    const typesContainer = document.createElement("div");
    typesContainer.classList.add("pokemon-types");
    pokemonData.types.forEach(
        (type) => {
            const pokemonType = document.createElement("ul");
            pokemonType.textContent = type.type.name;
            pokemonType.classList.add("type-name");
            typesContainer.appendChild(pokemonType);
        }
    );
    cardContainer.appendChild(typesContainer);            //[0] index vermeyince çalışmıyor!!
    document.getElementsByClassName("pokemon-card-container")[0].appendChild(cardContainer);
};

//istenen limitlerle tüm pokemonları çekme fonksiyonu
const getAllPokemon = async (limit = 0, offset = 0) => {
    const res = await fetch(`${pokemonApiURL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    return data;
};

// getAllPokemon()
//     .then(allPokemon => console.log(allPokemon));

//
getPokemonById(2)
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
