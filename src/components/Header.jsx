import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../features/user/UserSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const loginHandle = () => {
    if (isLoggedIn) {
      dispatch(setIsLoggedIn());
      setUser({});
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navBar">
        <button className="login-toggle" onClick={loginHandle}>
          {isLoggedIn ? "logout" : "login"}
        </button>
        <button className="btn-icon">
          <img
            src={`${import.meta.env.BASE_URL}assets/profile.png`}
            alt="profile"
          />
        </button>
        <h1>{isLoggedIn ? user?.name : "Student Profile"}</h1>
        <ul className="nav-btns">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "btn active" : "btn")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Profiles"
              className={({ isActive }) => (isActive ? "btn active" : "btn")}
            >
              Profiles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Details"
              className={({ isActive }) => (isActive ? "btn active" : "btn")}
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "btn active" : "btn")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Books"
              className={({ isActive }) => (isActive ? "btn active" : "btn")}
            >
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default React.memo(Header);
