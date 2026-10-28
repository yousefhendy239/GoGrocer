import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
