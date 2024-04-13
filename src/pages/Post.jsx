import React, { useEffect } from "react";
import PostC from "../components/Post/PostC";
const Post = (props) => {
  const { postViewHandler, toggleLoginModal } = props;

  useEffect(() => {
    postViewHandler();
  }, []);
  return (
    <div>
      <PostC toggleLoginModal={toggleLoginModal} />
    </div>
  );
};

export default Post;
