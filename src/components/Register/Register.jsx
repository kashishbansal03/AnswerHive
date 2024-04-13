import React, { useState } from "react";
import appleIcon from "../../assets/images/apple.svg";

import googleIcon from "../../assets/images/google.svg";
import "./Register.css";

const Register = (props) => {
  const { toggleLoginModal, handleLogin } = props;

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
        <h4>Sign up</h4>
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
        <input type="text" placeholder="Email" />
      </div>

      <div className="sign-up">
        <p>
          Already a hiver? <span onClick={handleLogin}>Log In</span>
        </p>
      </div>

      <div className="login-btn">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Register;
