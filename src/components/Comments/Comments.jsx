import React, {useState} from "react";
import "./Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faPlus,
 faCircle,
 faAngleDown,
faPerson,
 faUpLong,
 faDownLong,
 faMessage,
 faArrowUpFromBracket,
 faP,
 faComment,
} from "@fortawesome/free-solid-svg-icons";
import hmm from "../../assets/images/hmm2.png";
const Comments = () => {
  const [comments, setComments] = useState(false);

  return <div className="comment-container">

    {comments ? (
      <>
      <div className="sort-comment">
        <p>Sort by: Best <FontAwesomeIcon icon={faAngleDown} /></p>
    </div>
    <div className="add-comment-btn">
      <button><span><FontAwesomeIcon id="comment-plus" icon={faPlus}/></span>Add a Comment</button>
    </div>
    <div className="comments">
      <div className="comment-user">
        
        <p>Username</p><span><FontAwesomeIcon id="circle" icon={faCircle}/>1 mo. ago</span>
      </div>
      <div className="comment-content">
      <p>What part of the app would you want to hand off to bun? Buns kind of a big toolbox</p>
      </div>
      <div className="comments-btns">
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        id="upvote"
                        icon={faUpLong}
                      />
                      <p>3000</p>
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
                      <p>comment</p>
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
      </>
      
    )  : <div className="no-comments">
      <div className="no-comments-icon">
        <img src={hmm} alt="hmm" />
        </div>
        <div className="no-comments-content">
          <div>
            <p>Be the first to comment!</p>
            </div>
            <div>
              <p>Nobody has responded to this post yet.</p>
              <p>Add your thoughts and get this conversation started.</p>
              </div>
          </div>
      
      </div>}
   
  </div>;
};

export default Comments;
