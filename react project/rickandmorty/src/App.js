import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';

function App() {

  //data state
  const [characterList, setCharacterList] = useState([]);

  //Sıralı tam liste :)
  const getCharacter = async () => {
    try {
      let allCharacters = [];
      let nextPage = 'https://rickandmortyapi.com/api/character';

      while (nextPage) {
        const res = await fetch(nextPage);
        const data = await res.json();
        allCharacters = [...allCharacters, ...data.results];
        nextPage = data.info.next;
      }

      const promises = allCharacters.map(async character => {
        const res = await fetch(character.url);
        const charData = await res.json();
        return {
          image: charData.image,
          id: charData.id,
          name: charData.name,
          status: charData.status,
          species: charData.species,
          type: charData.type,
          gender: charData.gender,
          origin: charData.origin.name,
          location: charData.location.name
        };
      });

      const charDetails = await Promise.all(promises);
      setCharacterList(charDetails);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };

  useEffect(() => { getCharacter(); }, []);

  return (
    <div className="App">
      <Header />
      <div className='character-list'>
        {characterList.map((character, index) => (
          <div key={index} className='character-card'>
            <img className='profile-image' src={character.image} alt={character.name} />
            <h2>{character.id} - {character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin}</p>
            <p>Location: {character.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
