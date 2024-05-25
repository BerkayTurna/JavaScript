import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navleft">
        <h1>
          <Link to="/">Student Manager</Link>
        </h1>
      </div>
      <div className="navright">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/students/new">New Student</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
