function Header({ nameInput, setNameInput, statusList, setStatusList }) {
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
                        <span className="sub"><input type="radio" name="Spname" />Human</span>
                        <span className="sub"><input type="radio" name="Spname" />Alien</span>
                        <span className="sub"><input type="radio" name="Spname" />Humanoid</span>
                        <span className="sub"><input type="radio" name="Spname" />Poopybutthole</span>
                        <span className="sub"><input type="radio" name="Spname" />Mythological Creature</span>
                        <span className="sub"><input type="radio" name="Spname" />Animal</span>
                        <span className="sub"><input type="radio" name="Spname" />Robot</span>
                        <span className="sub"><input type="radio" name="Spname" />Cronenberg</span>
                        <span className="sub"><input type="radio" name="Spname" />Disease</span>
                        <span className="sub"><input type="radio" name="Spname" />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Gender</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="Gname" />Female</span>
                        <span className="sub"><input type="radio" name="Gname" />Genderless</span>
                        <span className="sub"><input type="radio" name="Gname" />Male</span>
                        <span className="sub"><input type="radio" name="Gname" />Unknown</span>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;