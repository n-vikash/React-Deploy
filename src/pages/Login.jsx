import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../features/user/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = JSON.parse(localStorage.getItem("users"));

  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const userRef = useRef();
  const passRef = useRef();
  const Submit = (e) => {
    e.preventDefault();
    const logUser = users.find(
      (user) =>
        userRef.current.value === user.username ||
        userRef.current.value === user.email,
    );
    if (logUser && logUser.password === passRef.current.value) {
      dispatch(setUser(logUser));
      localStorage.setItem("curUser", JSON.stringify(logUser));
      navigate("/");
    } else {
      setErr("⚠ Invalid username/Password ");
    }
    dispatch(setIsLoggedIn());
    localStorage.setItem("isLoggedIn", "true");
  };
  const handlekey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passRef.current.focus();
    }
  };
  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <>
      <div id="login">
        <p className="err">{err}</p>
        <p className="login-msg">Login to you</p>
        <form action="" id="form" onSubmit={Submit}>
          <input
            type="text"
            name="userName"
            className="form-btn user"
            placeholder="eneter email/Username"
            ref={userRef}
            onKeyDown={handlekey}
          />
          <input
            type={show ? "text" : "password"}
            name="password"
            className="form-btn pass"
            placeholder="enter password"
            ref={passRef}
          />
          <input type="submit" value="submit" className="form-btn submit" />
        </form>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        <Link to="/signup" className="signup-btn">
          signup
        </Link>
      </div>
    </>
  );
};

export default Login;
