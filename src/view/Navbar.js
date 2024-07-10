import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-name">
          <div className="text">
            {Array.from("Welcome here!").map((letter, index) => (
              <span key={index} style={{ "--i": index + 1 }}>
                {letter}
              </span>
            ))}
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-works">
              My Works
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-me">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
