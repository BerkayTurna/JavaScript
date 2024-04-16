import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //data state
  const [characterList, setCharacterList] = useState({
    image: "",
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  });

  //Sıralı tam liste :)

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await fetch('rickandmortyapi.com/api/character');
        const data = await res.json();
        const promises = data.results.map(async character => {
          const res = await fetch(character.url);
          const charData = await res.json();
          return {
            image: charData.image,
            id: charData.id,
            name: charData.name,
            status: charData.status,
            species: charData.species,
            type: charData.type,
            gender: charData.gender
          };
        });
        const charDetails = await Promise.all(promises);
        setCharacterList(charDetails);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };
    getCharacter();
  }, []);

  return (
    <div className="App">
      <h1>Rick & Morty Characters</h1>
      <div className='character-list'>
        {characterList.map((character, index) => (
          <div key={index} className='character-card'>
            <img src={character.image} alt="" />
            <h2>{character.id} - {character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
