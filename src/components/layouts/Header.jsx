import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>TrailVenture</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
