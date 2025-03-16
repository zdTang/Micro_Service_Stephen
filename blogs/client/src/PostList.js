import { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
const PostList = ({ randomNumber }) => {
  const [posts, setPosts] = useState({});
  console.log(randomNumber);
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  //[]means only triggered during the mounting of the component
  //Be aware: Mounting means putting elements into the DOM. it is not same as rendering
  //So that if useEffect here, re-render will not trigger fetchPosts as it is not mounting!!!!
  //useEffect(() => {
  fetchPosts();
  //}, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-between">
      {randomNumber}
      {renderedPosts}
    </div>
  );
};

export default PostList;
