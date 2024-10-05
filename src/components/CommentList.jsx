import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../redux/commentSlice";
import Comment from "../redux/Comment";

const CommentList = () => {
  const dispatch = useDispatch();

  const { comments } = useSelector((store) => store.comment);
  console.log(comments);

  useEffect(() => {
    dispatch(getAllComments());
  }, []);
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentList;
