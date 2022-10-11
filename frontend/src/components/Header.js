import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around p-5 items-center">
      <h1>Pandemica</h1>
      <div className="flex">
        <Link to="/">Financial asistance</Link>
      </div>
      <ul className="flex space-x-5">
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
