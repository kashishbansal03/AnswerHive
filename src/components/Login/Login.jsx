import React, { useState } from "react";
import appleIcon from "../../assets/images/apple.svg";

import googleIcon from "../../assets/images/google.svg";
import Register from "../Register/Register";
import "./Login.css";

const Login = (props) => {
  const { toggleLoginModal, handleRegister } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div
  };
  return (
    <div className="login-modal" onClick={handleModalClick}>
      <div className="modal-x">
        {" "}
        <p onClick={toggleLoginModal}>X</p>
      </div>
      <div className="modal-header">
        <h4>Log in</h4>
        <p>
          By continuing, you agree to our User Agreement and acknowledge that
          you understand the Privacy Policy.
        </p>
      </div>

      <div className="login-option-btns">
        <button>
          <img src={googleIcon} id="google-icon" />
          Continue with Google
        </button>
        <button>
          {" "}
          <img src={appleIcon} id="google-icon" />
          Continue with Apple
        </button>
      </div>

      <div className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>

      <div className="sign-up">
        <p>
          New to AnswerHive? <span onClick={handleRegister}> Sign up</span>
        </p>
        <p>Forgot password</p>
      </div>

      <div className="login-btn">
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Login;
