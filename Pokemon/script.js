const pokemonApiURL = 'https://pokeapi.co/api/v2/';

//await kullanarak id ile pokemon çekme fonksiyonu
const getPokemonById = async (pokemonId) => {
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
    const typesTag = document.createElement("h3");
    typesTag.textContent = "Types:";
    typesContainer.appendChild(typesTag);
    typesContainer.classList.add("pokemon-types");
    pokemonData.types.forEach(
        (type) => {
            const pokemonType = document.createElement("ul");
            pokemonType.textContent = type.type.name;
            pokemonType.classList.add("type-name");
            typesContainer.appendChild(pokemonType);
        }
    );
    cardContainer.appendChild(typesContainer);
    document.getElementById("pokemon-card-container").appendChild(cardContainer);
};
//
//istenen limitlerle tüm pokemonları çekme fonksiyonu
const getAllPokemon = async (limit = 0, offset = 0) => {
    const res = await fetch(`${pokemonApiURL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    console.log(data)
    return data;
};

// getAllPokemon()
//     .then(allPokemon => {
//         console.log(allPokemon)});

// HTML template nasıl olur?
// döngüde asenkron nasıl çalışır???
const displayAllPokemon = async (limit = 151, offset = 0) => {
    try {
        const allPokemonData = await getAllPokemon(limit, offset);
        const pokemonList = allPokemonData.results;
        console.log(pokemonList);

        pokemonList.forEach((pokemon) => {
            getPokemonById(pokemon.name)
                .then((pokemonData) => createPokemonCard(pokemonData))
        });
    } catch (error) {
        console.log(error);
    }
};

displayAllPokemon();


//
// getPokemonById(2)
//     .then(pokemon => {
//         createPokemonCard(pokemon)
//     });

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
