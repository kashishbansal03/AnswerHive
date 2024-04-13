import React, { useEffect, useState } from "react";
import Side from "../components/Side/Side";
import "./Home.css";
import MainContent from "../components/MainContent/MainContent";
import Popular from "../components/Popular/Popular";
import Post from "./Post";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Topic from "./Topic";
import NotFound from "./NotFound";

const Home = (props) => {
  const [postView, setPostView] = useState(false);
  const [topicView, setTopicView] = useState(false);
  const [mainView, setMainView] = useState(true);
  const [errorView, setErrorView] = useState(false);
  const { data, toggleLoginModal } = props;
  const location = useLocation();

  const postViewHandler = () => {
    setTopicView(false);
    setMainView(false);
    setErrorView(false)
    setPostView(true);
    
  };

  const topicViewHandler = () => {
    setPostView(false);
    setMainView(false);
    setErrorView(false)
    setTopicView(true);
  };


  useEffect(() => {
    if (location.pathname === "/") {
      setPostView(false);
      setTopicView(false);
      setMainView(true);
    } 


    

    
  
    if(postView){
      setTopicView(false);
    }
    if(topicView){
      setPostView(false);
    }

    
  }, [location]);

  return (
    <div className="home-container">
    <div className="home-side-bar">
    <Side />
    </div>
    <div className="home-main-content">
      {mainView ? <MainContent data={data} toggleLoginModal={toggleLoginModal} />
        : null }
      <Routes>
        <Route
          path="/post/:post_id"
          element={
            <Post
              postViewHandler={postViewHandler}
              toggleLoginModal={toggleLoginModal}
            />
          }
        />
      <Route path="/topics/:topic" element={<Topic toggleLoginModal={toggleLoginModal} data={data} topicViewHandler={topicViewHandler}/>} />
         
      </Routes>
    </div>
    <div className="home-popular">
    <Popular data={data} />
    </div>
  </div>




  );
};

export default Home;
