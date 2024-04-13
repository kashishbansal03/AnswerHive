import React, { useEffect, useState } from 'react'
import "./TopicC.css"
import { useLocation } from 'react-router-dom'
import CardView from '../CardView/CardView'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faCircle,
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
  faList,
  faRug,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "../CardView/CardView.css"

const TopicC = (props) => {
  const {data, toggleLoginModal} = props;
  const [topic, setTopic] = useState([])

  

  let location = useLocation();
  const [title, setTitle] = useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const getPath = () => {
    let paths = location.pathname;
    console.log(paths);
    let part = paths.split("/");
    setTitle(capitalizeFirstLetter(part[2]));
    const topicItems = data.filter(item => item.topics === part[2]);
    setTopic(topicItems);
   

  }




  useEffect(() => {
    getPath();
  

  }, [location])
  return (
    <div className='topic-wrapper'>
        <div className='topic-title'>
          <h2>{title}</h2>
          <p>bio</p>
        </div>
        <div className='topic-btns'>
          <div> 
          <button>Posts</button>
            </div>
            <div>
            <button>Communities</button>

            </div>
        </div>
        <div className='topic-cards'>

          {topic.length > 0 ? <div> {topic.map((cards) => {
        return (
          <Link className="link" to={`/post/${cards.post_id}`}>
            <div className="topic-view" key={cards.user_id}>
              <div className="topic-view-header">
                <div className="topic-view-header-left">
                  <img className="sub-avatar" src={`${cards.sub_avatar}`} />
                  <p className="sub-name">rz/{cards.subreddit}</p>
                  <FontAwesomeIcon className="date-circle" icon={faCircle} />
                  <span className="topic-view-date"> {cards.post_date}</span>
                  <FontAwesomeIcon className="date-circle" icon={faCircle} />
                </div>
                <div className="topic-view-header-right">
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
              <div className="topic-view-content">
                <div className="topic-view-left">
                  <div className="topic-view-left-text">
                    <p>{cards.post_title}</p>
                  </div>
                  <div className="topic-view-right-img">
                    <img src={`${cards.image}`} alt="cat image" />
                  </div>
                  <div className="topic-view-left-btns">
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        className="topic-view-btn-icon"
                        id="upvote"
                        icon={faUpLong}
                      />
                      <p>{cards.upvotes}</p>
                      <FontAwesomeIcon
                        className="topic-view-btn-icon"
                        id="downvote"
                        icon={faDownLong}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="topic-view-btn-icon"
                        icon={faComment}
                      />
                      <p>{cards.comment_count}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="topic-view-btn-icon"
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
      })} </div> : <p> NO POSTS WITH THIS TOPIC</p>}
       
        </div>
    </div>
  )
}

export default TopicC
