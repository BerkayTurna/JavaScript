import propTypes from 'prop-types';
function Header({ title, navElements }) {
    return (
        <div>
            <header className='header'>
                <h2>{title}</h2>
                <nav>
                    {navElements.map((element) => {
                        return (
                            <a href="#" key={element}>{element}</a>
                        )
                    })}

                </nav>
            </header>
        </div>
    );
}
Header.propTypes = {
    title: propTypes.string.isRequired,
    navElements: propTypes.arrayOf(propTypes.string).isRequired
}
// Header.defaultProps = {
//     title: "Default Title",
//     navElements: ["nav1", "nav2", "nav3"]
// }

export default Header;