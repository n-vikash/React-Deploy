import React, { useContext } from "react";
import { userContext } from "./userContext";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, setLoggedIn, setUser } = useContext(userContext);
  const loginHandle = () => {
    if (isLoggedIn) {
      setLoggedIn(false);
      setUser([]);
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
          <img src="/assets/profile.png" alt="profile" />
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
