import PostCreate from "./PostCreate";
import PostList from "./PostList";
import { useState } from "react";
const App = () => {

  return (
    <div className="container">
      <>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
      </>
    </div>
  );
};

export default App;
