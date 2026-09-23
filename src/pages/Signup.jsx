import { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn, setUser } from "../features/user/UserSlice";

const Signup = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const dispatch = useDispatch();
  const len = users.length + 1;
  const [curUser, setCurUser] = useState({
    id: len,
    username: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [err, setErr] = useState("");

  const passRef = useRef();
  const useref = useRef();

  const Submit = (e) => {
    e.preventDefault();
    if (curUser.password === passRef.current.value) {
      users.push(curUser);
      dispatch(setUser(curUser));
      localStorage.setItem("curUser", JSON.stringify(curUser));
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(setIsLoggedIn());
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setErr("Password doesn't match");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurUser({ ...curUser, [name]: value });
  };
  useEffect(() => {
    useref.current.focus();
  }, []);

  return (
    <>
      <div id="signup">
        <p className="err">{err}</p>
        <p className="signup-msg">Signup</p>
        <form action="" id="form-signup" onSubmit={Submit}>
          <input
            type="text"
            name="name"
            className="form-btn name"
            placeholder="enter your name"
            value={curUser.name}
            onChange={handleChange}
            ref={useref}
            required={true}
          />
          <input
            type="text"
            name="username"
            className="form-btn user"
            placeholder="eneter Username"
            value={curUser.username}
            onChange={handleChange}
            required={true}
          />
          <input
            type="number"
            className="form-btn number"
            name="phone"
            placeholder="+91 enter number"
            onChange={handleChange}
            value={curUser.phone}
            required={true}
          />
          <input
            type="email"
            name="email"
            className="form-btn email"
            value={curUser.email}
            onChange={handleChange}
            placeholder="enter email"
            required={true}
          />
          <input
            type={show1 ? "text" : "password"}
            name="password"
            className="form-btn pass"
            value={curUser.password}
            onChange={handleChange}
            placeholder="enter password"
            required={true}
          />
          <input
            type={show2 ? "text" : "password"}
            name="ocnfirm-password"
            className="form-btn pass"
            placeholder="confirm password"
            ref={passRef}
            required={true}
          />
          <input type="submit" value="submit" className="form-btn submit" />
        </form>
        <button className="btn btn1" onClick={() => setShow1(!show1)}>
          {show1 ? "Hide" : "Show"}
        </button>
        <button className="btn btn2" onClick={() => setShow2(!show2)}>
          {show2 ? "Hide" : "Show"}
        </button>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </>
  );
};

export default Signup;
