import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/postSlice";
import Post from "../redux/Post";
const PostList = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((store) => store.post);
  console.log(posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
