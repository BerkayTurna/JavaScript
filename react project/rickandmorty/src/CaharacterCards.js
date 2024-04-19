function CharacterCards({ filteredCharList }) {


    return (
        <div>
            <h2 className='counter'> Count: {filteredCharList.length}</h2>
            <div className='character-list'>
                {filteredCharList.map((character, index) => (
                    <div key={index} className='character-card'>
                        <img className='profile-image' src={character.image} alt={character.name} />
                        <h3>{character.id} - {character.name}</h3>
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
    )
}

export default CharacterCards;