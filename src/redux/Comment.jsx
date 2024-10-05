import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <div style={{ border: "1px solid yellow" }}>
        <div>
          {comment.email}-{comment.body}
        </div>
      </div>
    </div>
  );
};

export default Comment;
