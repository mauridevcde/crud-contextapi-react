import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/new'>
            New Task
          </Link>
        </li>
      </ul>
    </div>
  );
};
