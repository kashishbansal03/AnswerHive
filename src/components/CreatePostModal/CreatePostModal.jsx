import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faEllipsis,
  faRobot,
  faMagnifyingGlass,
  faStea,
} from "@fortawesome/free-solid-svg-icons";
import "./CreatePostModal.css";
import React, { useState } from "react";
import Register from "../Register/Register";
import CreatePost from "../CreatePost/CreatePost";
const CreatePostModal = (props) => {
  const { toggleCreatePostModal } = props;

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
    <div className="modal-blur" onClick={toggleCreatePostModal}>
      {register ? (
        <Register
          toggleCreatePostModal={toggleCreatePostModal}
          handleLogin={handleLogin}
        />
      ) : (
        <CreatePost
          toggleCreatePostModal={toggleCreatePostModal}
          handleRegister={handleRegister}
        />
      )}
    </div>
  );
};

export default CreatePostModal;
