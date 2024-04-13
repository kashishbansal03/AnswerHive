import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Navbar from "./components/Navbar/Navbar";
import mockData from "./MOCK_DATA.json";
import LoginModal from "./components/LoginModal/LoginModal";
function App() {
  const [data, setData] = useState([]);
  const [loginModal, setLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  useEffect(() => {
    setData(mockData);
    console.log(data);
  }, []);

  return (
    <div className="app">
      <Navbar toggleLoginModal={toggleLoginModal} />
      {loginModal && <LoginModal toggleLoginModal={toggleLoginModal} />}
      <Routes>
        <Route
          path="*"
          element={<Home data={data} toggleLoginModal={toggleLoginModal} />}
        />

      </Routes>
    </div>
  );
}

export default App;
