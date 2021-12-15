import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { default as agilityLogo } from "../Images/Logo/Agiity-monochrome-black.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    //Firebase shit
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };
  const regiester = (e) => {
    e.preventDefault();
    //createuserWith email then return the auth user.
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="logo_placment">
      <Link to="/">
        <img src={agilityLogo} alt="agilityLogo" className="login_logo" />
      </Link>
      <div className="login">
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            {/*Target the email field*/}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/*Target Password field*/}
            <h5>Password</h5>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            {/*Submit button*/}
            <button
              type="submit"
              onClick={signIn}
              className="login__SignButton"
            >
              Sign In
            </button>
          </form>
          <button onClick={regiester} className="login__registerButton">
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
