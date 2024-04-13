import React from "react";
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
  faArrowDown,
  faArrowsUpDownLeftRight,
  faArrowsDownToPeople,
  faArrowsDownToLine,
  faArrowsUpDown,
  faArrowDownWideShort,
  faArrowTrendDown,
  faFileArrowDown,
  faCloudDownloadAlt,
  faTemperatureDown,
  faDownload,
  faTurnDown,
  faArrowUp,
  faArrowUpFromGroundWater,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ClassicView = (props) => {
  const { data, toggleLoginModal } = props;
  return (
    <div>
      {data.map((cards) => {
        return (
          <Link className="link" to={`/post/${cards.post_id}`}>
            <div className="card" key={cards.user_id}>
              <div className="card-header">
                <div className="card-header-left">
                  <img className="sub-avatar" src={`${cards.sub_avatar}`} />
                  <p className="sub-name">rz/{cards.subreddit}</p>
                  <FontAwesomeIcon className="date-circle" icon={faCircle} />
                  <span className="card-date"> {cards.post_date}</span>
                  <FontAwesomeIcon className="date-circle" icon={faCircle} />
                </div>
                <div className="card-header-right">
                   <button style={{ backgroundColor: '#006494', ':hover': {cursor: 'pointer',filter: 'brightness(1.2)', backgroundColor: '#0582ca' } }}
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
              <div className="card-content">
                <div className="card-left">
                  <div className="card-left-text">
                    <p>{cards.post_title}</p>
                  </div>
                  <div className="card-left-btns">
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        id="upvote"
                        icon={faUpLong}
                      />
                      <p>{cards.upvotes}</p>
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        id="downvote"
                        icon={faDownLong}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        icon={faComment}
                      />
                      <p>{cards.comment_count}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        icon={faArrowUpFromBracket}
                      />
                      <p>Share</p>
                    </div>
                  </div>
                </div>
                <div className="card-right-img">
                  <img src={`${cards.image}`} alt="cat image" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ClassicView;
