import { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function PokemonFilter() {
    //useState'ler ile listeleme, filtrelemeler
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const pokemonApiURL = 'https://pokeapi.co/api/v2/';

    //ilk sayfa yüklenmesinde tüm listeyi getirir.
    useEffect(() => {
        const getPokemon = async () => {
            try {
                const res = await fetch(`${pokemonApiURL}pokemon?limit=151`);
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

        getPokemon();
    }, []);

    const filterPokemon = () => {
        let filtered = pokemonList;
        if (nameFilter) {
            filtered = filtered.filter(pokemon =>
                pokemon.name.toLowerCase().includes(nameFilter.toLowerCase())
            );
        }
        if (typeFilter) {
            filtered = filtered.filter(pokemon =>
                pokemon.types.includes(typeFilter.toLowerCase())
            )
        };

        setFilteredPokemonList(filtered);
    };

    //useEffect ile her değişiklik olduğunda tekrar filtreleme sağlanır.
    useEffect(() => {
        filterPokemon();
    }, [nameFilter, typeFilter]);

    const handleNameInputChange = event => {
        setNameFilter(event.target.value);
    };

    const handleTypeInputChange = event => {
        setTypeFilter(event.target.value);
    };

    return (
        <div>
            <div className='search'>
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
            </div>
            <div className='pokemon-list'>
                {filteredPokemonList.map((pokemon, index) => (
                    <div key={index} className='pokemon-card'>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h2>{pokemon.id} - {pokemon.name}</h2>
                        <p>Types:</p>
                        <p>{pokemon.types.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonFilter;