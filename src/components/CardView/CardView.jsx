import React from "react";
import "./CardView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faAngleDown,
  faCircle,
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
  faList,
  faRug,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CardView = ({ data, toggleLoginModal }) => {
  return (
    <div>
      {data.map((cards) => {
        return (
          <Link className="link" to={`/post/${cards.post_id}`}>
            <div className="card-view" key={cards.user_id}>
              <div className="card-view-header">
                <div className="card-view-header-left">
                  <img className="sub-avatar" src={`${cards.sub_avatar}`} />
                  <p className="sub-name">rz/{cards.subreddit}</p>
                  <FontAwesomeIcon className="date-circle" icon={faCircle} />
                  <span className="card-view-date"> {cards.post_date}</span>
                  <FontAwesomeIcon className="date-circle" icon={faCircle} />
                </div>
                <div className="card-view-header-right">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      toggleLoginModal();
                    }}
                  >
                    Join
                  </button>
                  <div className="circle-div">
                    <FontAwesomeIcon className="circle" icon={faCircle} />
                    <FontAwesomeIcon className="circle" icon={faCircle} />
                    <FontAwesomeIcon className="circle" icon={faCircle} />
                  </div>
                </div>
              </div>
              <div className="card-view-content">
                <div className="card-view-left">
                  <div className="card-view-left-text">
                    <p>{cards.post_title}</p>
                  </div>
                  <div className="card-view-right-img">
                    <img src={`${cards.image}`} alt="cat image" />
                  </div>
                  <div className="card-view-left-btns">
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        id="upvote"
                        icon={faUpLong} 
                      />
                      <p>{cards.upvotes}</p>
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        id="downvote"
                        icon={faDownLong}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        icon={faMessage}
                      />
                      <p>{cards.comment_count}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        icon={faArrowUpFromBracket}
                      />
                      <p>Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardView;
