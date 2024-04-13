import React, { useState, useEffect } from "react";
import "./Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowUpWideShort,
  faGamepad,
  faBaseball,
  faChartLine,
  faCoins,
  faTv,
  faStar,
  faRobot,
  faBullhorn,
  faCircleQuestion,
  faBookOpen,
  faWrench,
  faMicrophone,
  faAngleDown,
  faAngleUp,
  faHomeAlt,
  faHomeLg,
  faHomeUser,
  faArrowUp19,
  faArrowUpRightFromSquare,
  faFireBurner,
  faFire,
  faFireFlameCurved,
  faFireFlameSimple,
  faBaseballBatBall,
  faBasketballBall,
  faChartBar,
  faChartSimple,
  faChartArea,
  faTelevision,
  faClapperboard,
  faBezierCurve,
  faQuestionCircle,
  faPersonCircleQuestion,
  faClipboardQuestion,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Side = () => {
  const [topics, setTopics] = useState(false);
  const [resources, setResources] = useState(false);

  const handleTopic = () => {
    setTopics(!topics);
  };

  const handleRecourses = () => {
    setResources(!resources);
  };
  return (
    <div className="side-bar">
      <div className="side-home">
        <Link className="link-side" to={"/"}>
          <div className="active-home">
            {" "}
            <FontAwesomeIcon icon={faHomeLg} />
            <h4>Home</h4>
          </div>
        </Link>
        <div>
          <FontAwesomeIcon icon={faFire} />
          <h4>Popular</h4>
        </div>
      </div>
      <div className="side-topic">
        <div className="topic" onClick={handleTopic}>
          <h4>TOPICS</h4>
          <FontAwesomeIcon
            id="angle-icon"
            className={topics ? "angleUp" : "angleDown"}
            icon={topics ? faAngleDown : faAngleDown}
          />
        </div>
        {topics && (
          <div className="topic-list">
            <div>
              <ul>
              <Link className="side-links" to={"/topics/gaming"}>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faGamepad} />
                 Gaming
                </li>
                </Link>
                <Link className="side-links" to={"/topics/sports"}>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBasketballBall} />
                 Sports
                </li>
                </Link>
                <Link className="side-links" to={"/topics/business"}>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faChartLine} />
                 Business
                </li>
                </Link>
                <Link className="side-links" to={"/topics/crypto"}>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faCoins} />
                 Crypto
                </li>
                </Link>
                <Link className="side-links" to={"/topics/televison"}>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faTelevision} />
                 Televison
                </li>
                </Link>
                <Link className="side-links" to={"/topics/celebrity"}>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faClapperboard} />
                  Celebrity
                </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="side-topic">
        <div className="topic" onClick={handleRecourses}>
          <h4>RESOURCES</h4>
          <FontAwesomeIcon
            id="angle-icon"
            className={resources ? "angleUp" : "angleDown"}
            icon={resources ? faAngleDown : faAngleDown}
          />
        </div>
        {resources && (
          <div className="topic-list">
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBezierCurve} />
                  About 
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBullhorn} />
                  Advertise
                </li>
                <li>
                  <FontAwesomeIcon
                    className="topic-icon"
                    icon={faQuestionCircle}
                  />
                  Help
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBookOpen} />
                  Blog
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faComputer} />
                  Careers
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faMicrophone} />
                  Press
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* <div className="policy">
        <p>Radditz, Inc. @ 2023. All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Side;
