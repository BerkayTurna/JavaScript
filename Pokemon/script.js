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
    
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("pokemon-card");

    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemonData.sprites.other.dream_world.front_default;
    cardContainer.appendChild(pokemonImg);

    const pokemonNumName = document.createElement("h2");
    pokemonNumName.textContent = `${pokemonData.id} - ${pokemonData.name}`;
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

//Tüm pokemonları gösterme fonksiyonu
const displayAllPokemon = async (limit = 151, offset = 0) => {
    try {
        const allPokemonData = await fetch(
            `${pokemonApiURL}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await allPokemonData.json();
        const pokemonList = data.results;

        for (const pokemon of pokemonList) {
            try {
                const pokemonRes = await fetch(
                    `${pokemonApiURL}pokemon/${pokemon.name}`
                );
                const pokemonData = await pokemonRes.json();
                createPokemonCard(pokemonData);
            }
            catch (error) {
                console.log(error);
            }
        };
    }
    catch (error) {
        console.log(error);
    }
};

displayAllPokemon();

//filtreleme ile name search yapma
const filterPokemon = () => {
    const pokemonInput = document.getElementById("input-name").value.toLowerCase();
    const selectAllPokemon = document.querySelectorAll(".pokemon-card");
    selectAllPokemon.forEach((pokemon) => {
        const pokemonName = pokemon.querySelector("h2").textContent; //.toLowercase();
        const isPokemonInclude = pokemonName.includes(pokemonInput);
        if (isPokemonInclude) {
            pokemon.style.display = "block";
        } else {
            pokemon.style.display = "none";
        }
    });
}
document.getElementById("input-name").addEventListener("input", filterPokemon)


//filtreleme ile type search yapma
const filterByType = ()=>{
    const searchInput = document.getElementById("input-type").value.toLowerCase();
    const selectAllPokemon = document.querySelectorAll(".pokemon-card");

    //type search sırasında contentin tekrar gelmesi için
    if (!searchInput.trim()) {
        selectAllPokemon.forEach((card) => {
          card.style.display = "block";
        });
        return;
      };

    selectAllPokemon.forEach((pokemon)=>{
    const pokemonTypes = [...pokemon.querySelectorAll(".type-name")].map((type)=>
    type.textContent.toLowerCase());
    const searchId = pokemonTypes.includes(searchInput);
    if(searchId){
        pokemon.style.display = "block";
    }else{
        pokemon.style.display = "none";
    }
});
};

document.getElementById("input-type").addEventListener("input", filterByType);
