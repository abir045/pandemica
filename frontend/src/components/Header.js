import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex justify-around p-5 items-center">
      <h1>Pandemica</h1>
      <div className="flex">
        <Link to="/">Financial asistance</Link>
      </div>
      <ul className="flex space-x-5">
        {user ? (
          <li>
            <button className="bg-black text-white flex" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
