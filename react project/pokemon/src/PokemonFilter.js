import { useState } from 'react';

function PokemonFilter() {

    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const pokemonApiURL = 'https://pokeapi.co/api/v2/';

    const getPokemonById = async (pokemonId) => {
        try {
            const res = await fetch(`${pokemonApiURL}pokemon/${pokemonId}`);
            const data = await res.json();
            return data;
        }
        catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };
    return (
        <div>
            <h1>Pokemon Filter</h1>
            <input
                type="text"
                placeholder='Filter poke by name'
                value={nameFilter}
            // onChange={handleTypeInputChange}
            />
            <input
                type="text"
                placeholder='Filter poke by type'
                value={typeFilter}
            // onChange={handleTypeInputChange}
            />
            <button onClick={getPokemonById}>Pokemon Data Getir</button>
            <div>
                {filteredPokemonList.map((pokemon, index) => (
                    <div key={index}>
                        <h2>{pokemon.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonFilter;