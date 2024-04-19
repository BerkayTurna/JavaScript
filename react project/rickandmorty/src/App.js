import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import BackToTopButton from './BackToTopButton.js';
import CharacterCards from './CaharacterCards.js';

function App() {

  //state'ler
  const [characterList, setCharacterList] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [filteredCharList, setFilteredCharList] = useState([]);
  const [statusList, setStatusList] = useState('');
  const [speciesList, setSpeciesList] = useState('');
  const [genderList, setGenderList] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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

  //search character by name
  useEffect(() => {
    let filtered = characterList;
    if (nameInput) {
      filtered = filtered.filter(character => character.name.toLowerCase().includes(nameInput.toLowerCase()))
    }
    setFilteredCharList(filtered);
  }, [nameInput, characterList]);

  //status radio buttons
  useEffect(() => {
    let filtered = characterList;
    if (statusList) {
      filtered = filtered.filter(character => character.status.includes(statusList))
    }
    setFilteredCharList(filtered);
  }, [statusList, characterList]);


  //species radio buttons
  useEffect(() => {
    let filtered = characterList;
    if (speciesList) {
      filtered = filtered.filter(character => character.species.includes(speciesList))
    }
    setFilteredCharList(filtered);
  }, [speciesList, characterList]);


  //gender radio buttons
  useEffect(() => {
    let filtered = characterList;
    if (genderList) {
      filtered = filtered.filter(character => character.gender.includes(genderList))
    }
    setFilteredCharList(filtered);
  }, [genderList, characterList]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        nameInput={nameInput}
        setNameInput={setNameInput}
        setStatusList={setStatusList}
        setSpeciesList={setSpeciesList}
        setGenderList={setGenderList}
        getCharacter={getCharacter}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <CharacterCards
        filteredCharList={filteredCharList}
      />
      <BackToTopButton />
    </div>
  );
}

export default App;
