import React, { useEffect, useState } from "react";
import "./PostC.css";
import mockData from "../../MOCK_DATA.json";
import { useParams } from "react-router-dom";
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
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";
const PostC = ({ toggleLoginModal }) => {
  const [data, setData] = useState(mockData);
  const [singleData, setSingleData] = useState({});

  let id = useParams();
  let single = id.post_id;

  const getSinglePost = () => {};

  useEffect(() => {
    setSingleData(data[single - 1]);
  }, []);
  return (
    <div className="post">
      <div className="card-view" key={singleData?.user_id}>
        <div className="card-view-header">
          <div className="card-view-header-left">
            <img className="sub-avatar" src={`${singleData?.sub_avatar}`} />
            <p className="sub-name">rz/{singleData?.subreddit}</p>
            <FontAwesomeIcon className="date-circle" icon={faCircle} />
            <span className="card-view-date"> {singleData?.post_date}</span>
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
              <p>{singleData?.post_title}</p>
            </div>
            <div className="card-view-right-img">
              <img src={`${singleData?.image}`} alt="cat image" />
            </div>
            <div className="card-view-left-btns">
              <div>
                {" "}
                <FontAwesomeIcon
                  className="card-view-btn-icon"
                  id="upvote"
                  icon={faUpLong}
                />
                <p>{singleData?.upvotes}</p>
                <FontAwesomeIcon
                  className="card-view-btn-icon"
                  id="downvote"
                  icon={faDownLong}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  className="card-view-btn-icon"
                  icon={faComment}
                />
                <p>{singleData?.comments}</p>
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
      <Comments />
    </div>
  );
};

export default PostC;
