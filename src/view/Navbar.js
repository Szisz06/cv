import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-name">
            <div className="text">
              {Array.from("Mócza  Szilvia").map((letter, index) => (
                <span key={index} style={{ "--i": index + 1 }}>
                  {letter}
                </span>
              ))}
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Kezdőoldal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-works">
                Munkáim
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">
                Rólam
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Kapcsolat
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
