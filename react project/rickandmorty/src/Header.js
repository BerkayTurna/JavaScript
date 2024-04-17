function Header({ nameInput, setNameInput }) {
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
                        <span className="sub"><input type="radio" name="name" />Alive</span>
                        <span className="sub"><input type="radio" name="name" />Dead</span>
                        <span className="sub"><input type="radio" name="name" />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Species</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="name" />Human</span>
                        <span className="sub"><input type="radio" name="name" />Alien</span>
                        <span className="sub"><input type="radio" name="name" />Humanoid</span>
                        <span className="sub"><input type="radio" name="name" />Poopybutthole</span>
                        <span className="sub"><input type="radio" name="name" />Mythological Creature</span>
                        <span className="sub"><input type="radio" name="name" />Animal</span>
                        <span className="sub"><input type="radio" name="name" />Robot</span>
                        <span className="sub"><input type="radio" name="name" />Cronenberg</span>
                        <span className="sub"><input type="radio" name="name" />Disease</span>
                        <span className="sub"><input type="radio" name="name" />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Gender</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="name" />Female</span>
                        <span className="sub"><input type="radio" name="name" />Genderless</span>
                        <span className="sub"><input type="radio" name="name" />Male</span>
                        <span className="sub"><input type="radio" name="name" />Unknown</span>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;