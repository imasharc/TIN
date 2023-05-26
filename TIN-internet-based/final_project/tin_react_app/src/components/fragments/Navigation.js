import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main page</Link>
        </li>
        <li>
          <Link to="/engineers">Engineers</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/studios">Studios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
