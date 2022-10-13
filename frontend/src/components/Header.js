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
      <h1 className="flex text-2xl text-[#44B564] font-bold">Pandemica.</h1>
      {/* <div className="flex">
        <Link to="/">Financial asistance</Link>
      </div> */}
      <ul className="flex  space-x-5">
        {user ? (
          <>
            <li className="flex">
              <button
                className="flex  items-center space-x-3"
                onClick={onLogout}
              >
                <FaSignOutAlt />
                <p className="text-base font-bold">Logout</p>
              </button>
            </li>
            <li className="flex items-center">
              <Link className="flex space-x-3 items-center" to="/dashboard">
                <FaUser />
                <p className="font-bold text-base">Dashboard</p>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="flex items-center">
              <Link className="flex space-x-3 items-center" to="/login">
                <FaSignInAlt />
                <p className="font-bold text-base">Login</p>
              </Link>
            </li>

            <li className="flex items-center">
              <Link className="flex space-x-3 items-center" to="/register">
                <FaUser />
                <p className="font-bold text-base">Register</p>
              </Link>
            </li>
            {/* <li className="flex items-center">
              <Link className="flex space-x-3 items-center" to="/dashboard">
                <FaUser />
                <p className="font-bold text-base">Dashboard</p>
              </Link>
            </li> */}
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
