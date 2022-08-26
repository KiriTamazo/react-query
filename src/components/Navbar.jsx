import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heros">Traditional Super Heros</Link>
        </li>
        <li>
          <Link to="/rq-super-heros">RQ Super Heros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
