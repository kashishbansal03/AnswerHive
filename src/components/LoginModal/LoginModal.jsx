import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faEllipsis,
  faRobot,
  faMagnifyingGlass,
  faStea,
} from "@fortawesome/free-solid-svg-icons";
import "./LoginModal.css";
import React, { useState } from "react";
import appleIcon from "../../assets/images/apple.svg";

import googleIcon from "../../assets/images/google.svg";
import Register from "../Register/Register";
import Login from "../Login/Login";
const LoginModal = (props) => {
  const { toggleLoginModal } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleRegister = () => {
    setRegister(true);
  };

  const handleLogin = () => {
    setRegister(false);
  };

  return (
    <div className="modal-blur" onClick={toggleLoginModal}>
      {register ? (
        <Register
          toggleLoginModal={toggleLoginModal}
          handleLogin={handleLogin}
        />
      ) : (
        <Login
          toggleLoginModal={toggleLoginModal}
          handleRegister={handleRegister}
        />
      )}
    </div>
  );
};

export default LoginModal;
