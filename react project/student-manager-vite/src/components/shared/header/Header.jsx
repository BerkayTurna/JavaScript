import propTypes from "prop-types";

const Header = ({ title, navElements }) => {
  return (
    <header>
      <div className="navleft">
        <h1>{title}</h1>
      </div>
      <div className="navright">
        <ul>
          {navElements.map((element) => (
            <li key={element}>
              <a href="#">{element}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
  navElements: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Header;
