import React from "react";

const Post = ({ post }) => {
  return (
    <div style={{ border: "1px solid green" }}>
      <div>
        {post.title}-{post.body}
      </div>
    </div>
  );
};

export default Post;
