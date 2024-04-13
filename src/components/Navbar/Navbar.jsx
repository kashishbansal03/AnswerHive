import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faEllipsis,
  faRobot,
  faMagnifyingGlass,
  faBars,
  faB,
  faMarsAndVenus,
  faInfinity,
  faWandMagicSparkles,
  faBlog,
  faA,
  faGrinStars,
  faCoffee,
  faCodeFork,
  faDharmachakra,
  faChevronLeft,
  faRainbow,
  faBezierCurve,
  faDownload,
  faHamburger,
  faSearch,
  faMagnifyingGlassArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CreatePostModal from "../CreatePostModal/CreatePostModal";

const Navbar = (props) => {
  const { toggleLoginModal } = props;
  const [searchIcon, setSearchIcon] = useState(false);

  const handleFocus = () => {
    setSearchIcon(true);
  };

  const handleBlur = () => {
    setSearchIcon(false);
  };

  return (
    <nav style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="nav-container">
        <div className="nav-title">
          <div className="bars-mobile">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <FontAwesomeIcon id="robot" icon={faBezierCurve} />
          <Link className="link" to={"/"}>
            <h3 className="nav-h3" style={{ fontFamily: 'Arial, sans-serif' }}>AnswerHive</h3>
          </Link>
        </div>
        <div className="nav-search">
          {searchIcon ? (
            ""
          ) : (
            <FontAwesomeIcon id="search-mag" icon={faMagnifyingGlass} />
          )}
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
            placeholder="Search AnswerHive"
            style={{ fontFamily: 'Arial, sans-serif' }}
          />
        </div>
        <div className="nav-buttons">
          <div>
            <FontAwesomeIcon id="getap" icon={faDownload} />
            <button style={{ fontFamily: 'Arial, sans-serif' }}>Get app</button>
          </div>
          <div onClick={toggleLoginModal}>
            <button style={{ fontFamily: 'Arial, sans-serif' }}>Log In</button>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <FontAwesomeIcon id= "info" icon={faBars} />
          </div>
        </div>
      </div>
       
    </nav>
   
  );
  
};

export default Navbar;
