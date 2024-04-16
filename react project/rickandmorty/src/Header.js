function Header() {
    return (
        <div className="header">
            <navbar className="navbar-left">
                <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-png-lalingla-deviantart-21.png" alt="Rick and Morty" />
                <h1>Rick & Morty</h1>
            </navbar>
            <navbar className="navbar-right">
                <input type="text" className="search" placeholder="Search by character name" />
                <ul className="main">
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
                </ul>
            </navbar>
        </div>
    )
};

export default Header;