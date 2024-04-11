import { useState } from 'react';

function PokemonFilter() {

    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const pokemonApiURL = 'https://pokeapi.co/api/v2/';

    const getPokemonById = async () => {
        try {
            const res = await fetch(`${pokemonApiURL}pokemon`);
            const data = await res.json();
            const promises = data.results.map(async pokemon => {
                const res = await fetch(pokemon.url);
                const pokemonData = await res.json();
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    image: pokemonData.sprites.other['official-artwork'].front_default,
                    types: pokemonData.types.map(type => type.type.name)
                };
            });
            const pokemonDetail = await Promise.all(promises);
            setPokemonList(pokemonDetail);
            setFilteredPokemonList(pokemonDetail);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };
    const filterPokemon = () => {
        let filtered = pokemonList;
        if (nameFilter) {
            filtered = filtered.filter(pokemon =>
                pokemon.name.toLowercase().includes(nameFilter.toLowerCase())
            );
        }
        if (typeFilter) {
            filtered = filtered.filter(async pokemon => {
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return data.types.some(type => type.type.name.toLowerCase() === typeFilter.toLowerCase());
            });
        }
        setFilteredPokemonList(filtered);
    };

    const handleNameInputChange = event => {
        setNameFilter(event.target.value);
    };

    const handleTypeInputChange = event => {
        setTypeFilter(event.target.value);
    };

    return (
        <div>
            <h1>Pokemon Filter</h1>
            <input
                type="text"
                placeholder='Filter poke by name'
                value={nameFilter}
                onChange={handleNameInputChange}
            />
            <input
                type="text"
                placeholder='Filter poke by type'
                value={typeFilter}
                onChange={handleTypeInputChange}
            />
            <button onClick={getPokemonById}>Pokemon Getir</button>
            <div>
                {filteredPokemonList.map((pokemon, index) => (
                    <div key={index}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h2>{pokemon.name}</h2>
                        <p>ID: {pokemon.id}</p>
                        <p>Types: {pokemon.types.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonFilter;