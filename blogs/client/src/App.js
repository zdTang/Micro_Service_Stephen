import PostCreate from "./PostCreate";
import PostList from "./PostList";
import { useState } from "react";
const App = () => {
  const [state, setState] = useState();
  console.log(state);
  return (
    <div className="container">
      <>
        <PostCreate needTrigger={setState} />
        <hr />
        <h1>Posts</h1>
        <PostList />
      </>
    </div>
  );
};

export default App;
