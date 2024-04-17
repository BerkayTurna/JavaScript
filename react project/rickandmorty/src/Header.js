function Header() {
    return (
        <div className="header">
            <nav className="navbar-left">
                <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-png-lalingla-deviantart-21.png" alt="Rick and Morty" />
                <h1>Rick & Morty</h1>
            </nav>
            <nav className="navbar-right">
                <input type="text" className="search" placeholder="Search by character name" />
                <div className="dropdown">
                    <span className="dropdown-toggle">Status</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="status" />Alive</span>
                        <span className="sub"><input type="radio" name="status" />Dead</span>
                        <span className="sub"><input type="radio" name="status" />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Species</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="status" />Human</span>
                        <span className="sub"><input type="radio" name="status" />Alien</span>
                        <span className="sub"><input type="radio" name="status" />Humanoid</span>
                        <span className="sub"><input type="radio" name="status" />Poopybutthole</span>
                        <span className="sub"><input type="radio" name="status" />Mythological Creature</span>
                        <span className="sub"><input type="radio" name="status" />Animal</span>
                        <span className="sub"><input type="radio" name="status" />Robot</span>
                        <span className="sub"><input type="radio" name="status" />Cronenberg</span>
                        <span className="sub"><input type="radio" name="status" />Disease</span>
                        <span className="sub"><input type="radio" name="status" />Unknown</span>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="dropdown-toggle">Gender</span>
                    <div className="dropdown-menu">
                        <span className="sub"><input type="radio" name="status" />Female</span>
                        <span className="sub"><input type="radio" name="status" />Genderless</span>
                        <span className="sub"><input type="radio" name="status" />Male</span>
                        <span className="sub"><input type="radio" name="status" />Unknown</span>
                    </div>
                </div>
            </nav>

            {/* <ul className="main">
                    <li className="status">Status
                        <ul className="sub">
                            <li><input type="radio" />Alive</li>
                            <li><input type="radio" />Dead</li>
                            <li><input type="radio" />Unknown</li>
                        </ul>
                    </li>
                    <li className="status">Species
                        <ul className="sub">
                            <li><input type="radio" />Alive</li>
                            <li><input type="radio" />Dead</li>
                            <li><input type="radio" />Unknown</li>
                        </ul>
                    </li>
                    <li className="status">Gender
                        <ul className="sub">
                            <li><input type="radio" />Alive</li>
                            <li><input type="radio" />Dead</li>
                            <li><input type="radio" />Unknown</li>
                        </ul>
                    </li>
                </ul> */}
        </div>
    )
};

export default Header;