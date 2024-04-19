function Header({ nameInput, setNameInput, statusList, setStatusList, speciesList, setSpeciesList, genderList, setGenderList, getCharacter, darkMode, toggleDarkMode }) {
    //reset function
    const resetFilters = () => {
        setNameInput('');
        setStatusList('');
        setSpeciesList('');
        setGenderList('');
        getCharacter();
    };
    function DarkModeToggleButton({ darkMode, toggleDarkMode }) {
        return (
            <button className="dl-btn" onClick={toggleDarkMode}>
                {darkMode ? 'Lumos' : 'Nox'}
            </button>
        );
    };
    return (
        <div className="header">
            <nav className="navbar-left">
                <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-png-lalingla-deviantart-21.png" alt="Rick and Morty" />
                <h1>Rick & Morty</h1>
            </nav>
            <nav className="navbar-right">
                <input
                    type="text"
                    className="search"
                    placeholder="Search by character by name"
                    value={nameInput} //hep aynı yeri unutuyorsun :)
                    onChange={event => setNameInput(event.target.value)}
                />
                <div className="dropdown">
                    <span className="dropdown-toggle">Status</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="Stname" value="Alive" onChange={(event) => {
                            setStatusList(event.target.value);
                        }} />Alive</span>
                        <span className="sub"><input type="radio" name="Stname" value="Dead" onChange={(event) => {
                            setStatusList(event.target.value);
                        }} />Dead</span>
                        <span className="sub"><input type="radio" name="Stname" value="unknown" onChange={(event) => {
                            setStatusList(event.target.value);
                        }} />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Species</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="Spname" value="Human" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Human</span>
                        <span className="sub"><input type="radio" name="Spname" value="Alien" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Alien</span>
                        <span className="sub"><input type="radio" name="Spname" value="Humanoid" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Humanoid</span>
                        <span className="sub"><input type="radio" name="Spname" value="Poopybutthole" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Poopybutthole</span>
                        <span className="sub"><input type="radio" name="Spname" value="Mythological Creature" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Mythological Creature</span>
                        <span className="sub"><input type="radio" name="Spname" value="Animal" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Animal</span>
                        <span className="sub"><input type="radio" name="Spname" value="Robot" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Robot</span>
                        <span className="sub"><input type="radio" name="Spname" value="Cronenberg" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Cronenberg</span>
                        <span className="sub"><input type="radio" name="Spname" value="Disease" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Disease</span>
                        <span className="sub"><input type="radio" name="Spname" value="unknown" onChange={(event) => {
                            setSpeciesList(event.target.value);
                        }} />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Gender</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="Gname" value="Female" onChange={(event) => {
                            setGenderList(event.target.value);
                        }} />Female</span>
                        <span className="sub"><input type="radio" name="Gname" value="Genderless" onChange={(event) => {
                            setGenderList(event.target.value);
                        }} />Genderless</span>
                        <span className="sub"><input type="radio" name="Gname" value="Male" onChange={(event) => {
                            setGenderList(event.target.value);
                        }} />Male</span>
                        <span className="sub"><input type="radio" name="Gname" value="unknown" onChange={(event) => {
                            setGenderList(event.target.value);
                        }} />Unknown</span>
                    </div>
                </div>
                <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                    <DarkModeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </div>
                <div>
                    <input type="button" className="reset-btn" value="Reset" onClick={resetFilters} />
                </div>
            </nav>
        </div>
    )
};

export default Header;